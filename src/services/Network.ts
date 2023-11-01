import type { Room } from 'colyseus.js'
import { Client } from 'colyseus.js'

import { eventEmitter, Event } from '../events/EventCenter'
import store from '../stores'
import {
  pushChatMessage,
  pushCommunityChatMessage,
  pushDirectChatMessage,
  pushPlayerJoinedMessage,
  pushPlayerLeftMessage,
} from '../stores/ChatStore'
import {
  setLobbyJoined,
  setJoinedRoomData,
  setAvailableRooms,
  addAvailableRooms,
  removeAvailableRooms,
} from '../stores/RoomStore'
import {
  setSessionId,
  setPlayerNameMap,
  removePlayerNameMap,
  updateFriend,
} from '../stores/UserStore'
import { setWhiteboardUrls } from '../stores/WhiteboardStore'
import type {
  IChatMessage,
  IComputer,
  IOfficeState,
  IPlayer,
  IWhiteboard,
} from '../types/IOfficeState'
import { ItemType } from '../types/Items'
import { Message } from '../types/Messages'
import type { IRoomData } from '../types/Rooms'
import { RoomType } from '../types/Rooms'
import WebRTC from '../web/WebRTC'

export default class Network {
  private client: Client
  private room?: Room<IOfficeState>
  private lobby!: Room
  webRTC?: WebRTC

  mySessionId!: string

  constructor() {
    const endpoint = process.env.VITE_GAME_API_URL

    this.client = new Client(endpoint)
    this.joinLobbyRoom().then(() => {
      store.dispatch(setLobbyJoined(true))
    })

    eventEmitter.on(Event.MY_PLAYER_NAME_CHANGE, this.updatePlayerName, this)
    eventEmitter.on(Event.MY_PLAYER_TEXTURE_CHANGE, this.updatePlayer, this)
    eventEmitter.on(
      Event.PLAYER_DISCONNECTED,
      this.playerStreamDisconnect,
      this
    )
  }

  /**
   * method to join Colyseus' built-in LobbyRoom, which automatically notifies
   * connected clients whenever rooms with "realtime listing" have updates
   */
  async joinLobbyRoom() {
    this.lobby = await this.client.joinOrCreate(RoomType.LOBBY)

    this.lobby.onMessage('rooms', (rooms) => {
      store.dispatch(setAvailableRooms(rooms))
    })

    this.lobby.onMessage('+', ([roomId, room]) => {
      store.dispatch(addAvailableRooms({ room, roomId }))
    })

    this.lobby.onMessage('-', (roomId) => {
      store.dispatch(removeAvailableRooms(roomId))
    })
  }

  // method to join the public lobby
  async joinOrCreatePublic() {
    this.room = await this.client.joinOrCreate(RoomType.PUBLIC)
    this.initialize()
  }

  // method to join a custom room
  async joinCustomById(roomId: string, password: string | null) {
    this.room = await this.client.joinById(roomId, { password })
    this.initialize()
  }

  // method to create a custom room
  async createCustom(roomData: IRoomData) {
    const { name, description, password, autoDispose } = roomData
    this.room = await this.client.create(RoomType.CUSTOM, {
      autoDispose,
      description,
      name,
      password,
    })
    this.initialize()
  }

  // set up all network listeners before the game starts
  initialize() {
    if (!this.room) return

    this.lobby.leave()
    this.mySessionId = this.room.sessionId
    store.dispatch(setSessionId(this.room.sessionId))
    this.webRTC = new WebRTC(this.mySessionId, this)

    // new instance added to the players MapSchema
    this.room.state.players.onAdd = (player: IPlayer, key: string) => {
      if (key === this.mySessionId) return

      // track changes on every child object inside the players MapSchema
      player.onChange = (changes) => {
        console.log(changes)
        changes.forEach((change) => {
          const { field, value } = change
          eventEmitter.emit(Event.PLAYER_UPDATED, field, value, key)

          // when a new player finished setting up player name
          if (field === 'name' && value !== '') {
            store.dispatch(updateFriend({ status: 'online', username: value }))
            eventEmitter.emit(Event.PLAYER_JOINED, player, key)
            store.dispatch(setPlayerNameMap({ id: key, name: value }))
            store.dispatch(pushPlayerJoinedMessage(value))
          }
        })
      }
    }

    // an instance removed from the players MapSchema
    this.room.state.players.onRemove = (player: IPlayer, key: string) => {
      eventEmitter.emit(Event.PLAYER_LEFT, key)
      store.dispatch(updateFriend({ status: 'offline', username: player.name }))
      this.webRTC?.deleteVideoStream(key)
      this.webRTC?.deleteOnCalledVideoStream(key)
      store.dispatch(pushPlayerLeftMessage(player.name))
      store.dispatch(removePlayerNameMap(key))
    }

    // new instance added to the computers MapSchema
    this.room.state.computers.onAdd = (computer: IComputer, key: string) => {
      // track changes on every child object's connectedUser
      computer.connectedUser.onAdd = (item) => {
        eventEmitter.emit(Event.ITEM_USER_ADDED, item, key, ItemType.COMPUTER)
      }
      computer.connectedUser.onRemove = (item) => {
        eventEmitter.emit(Event.ITEM_USER_REMOVED, item, key, ItemType.COMPUTER)
      }
    }

    // new instance added to the whiteboards MapSchema
    this.room.state.whiteboards.onAdd = (
      whiteboard: IWhiteboard,
      key: string
    ) => {
      store.dispatch(
        setWhiteboardUrls({
          roomId: whiteboard.roomId,
          whiteboardId: key,
        })
      )
      // track changes on every child object's connectedUser
      whiteboard.connectedUser.onAdd = (item) => {
        eventEmitter.emit(Event.ITEM_USER_ADDED, item, key, ItemType.WHITEBOARD)
      }
      whiteboard.connectedUser.onRemove = (item) => {
        eventEmitter.emit(
          Event.ITEM_USER_REMOVED,
          item,
          key,
          ItemType.WHITEBOARD
        )
      }
    }

    // new instance added to the chatMessages ArraySchema
    this.room.state.chatMessages.onAdd = (item) => {
      console.log('message in on add event handler: ', item)
      if (!item.channel || item.channel == '') {
        store.dispatch(
          pushChatMessage({
            content: item.content,
            createdAt: item.createdAt,
            username: item.username,
          } as IChatMessage)
        )
      } else {
        const payload = {
          channel: item.channel,
          chatMessage: {
            content: item.content,
            createdAt: item.createdAt,
          },
          user: { avatar: item.avatar, username: item.username },
        }
        store.dispatch(pushCommunityChatMessage(payload))
      }
    }

    // when the server sends room data
    this.room.onMessage(Message.SEND_ROOM_DATA, (content) => {
      store.dispatch(setJoinedRoomData(content))
    })

    // when a user sends a message
    this.room.onMessage(Message.ADD_CHAT_MESSAGE, ({ clientId, content }) => {
      console.log(clientId)
      console.log(content)
      eventEmitter.emit(Event.UPDATE_DIALOG_BUBBLE, clientId, content)
    })

    // when a user sends a message
    this.room.onMessage(
      Message.DIRECT_CHAT_MESSAGE,
      ({ username, content, createdAt }) => {
        const payload = { content, createdAt, username } as IChatMessage
        store.dispatch(pushDirectChatMessage(payload))
        // eventEmitter.emit(Event.UPDATE_DIALOG_BUBBLE, clientId, content)
      }
    )

    // when a peer disconnects with myPeer
    this.room.onMessage(Message.DISCONNECT_STREAM, (clientId: string) => {
      this.webRTC?.deleteOnCalledVideoStream(clientId)
    })

    // when a computer user stops sharing screen
    this.room.onMessage(Message.STOP_SCREEN_SHARE, (clientId: string) => {
      const computerState = store.getState().computer
      computerState?.shareScreenManager?.onUserLeft(clientId)
    })
  }

  // method to register event listener and call back function when a item user added
  onChatMessageAdded(
    callback: (playerId: string, content: string) => void,
    context?: any
  ) {
    eventEmitter.on(Event.UPDATE_DIALOG_BUBBLE, callback, context)
  }

  // method to register event listener and call back function when a item user added
  onItemUserAdded(
    callback: (playerId: string, key: string, itemType: ItemType) => void,
    context?: any
  ) {
    eventEmitter.on(Event.ITEM_USER_ADDED, callback, context)
  }

  // method to register event listener and call back function when a item user removed
  onItemUserRemoved(
    callback: (playerId: string, key: string, itemType: ItemType) => void,
    context?: any
  ) {
    eventEmitter.on(Event.ITEM_USER_REMOVED, callback, context)
  }

  // method to register event listener and call back function when a player joined
  onPlayerJoined(
    callback: (Player: IPlayer, key: string) => void,
    context?: any
  ) {
    eventEmitter.on(Event.PLAYER_JOINED, callback, context)
  }

  // method to register event listener and call back function when a player left
  onPlayerLeft(callback: (key: string) => void, context?: any) {
    eventEmitter.on(Event.PLAYER_LEFT, callback, context)
  }

  // method to register event listener and call back function when myPlayer is ready to connect
  onMyPlayerReady(callback: (key: string) => void, context?: any) {
    eventEmitter.on(Event.MY_PLAYER_READY, callback, context)
  }

  // method to register event listener and call back function when my video is connected
  onMyPlayerVideoConnected(callback: (key: string) => void, context?: any) {
    eventEmitter.on(Event.MY_PLAYER_VIDEO_CONNECTED, callback, context)
  }

  // method to register event listener and call back function when a player updated
  onPlayerUpdated(
    callback: (field: string, value: number | string, key: string) => void,
    context?: any
  ) {
    eventEmitter.on(Event.PLAYER_UPDATED, callback, context)
  }

  // method to send player updates to Colyseus server
  updatePlayer(currentX: number, currentY: number, currentAnim: string) {
    this.room?.send(Message.UPDATE_PLAYER, {
      anim: currentAnim,
      x: currentX,
      y: currentY,
    })
  }

  // method to send player name to Colyseus server
  updatePlayerName(currentName: string) {
    this.room?.send(Message.UPDATE_PLAYER_NAME, { name: currentName })
  }

  // method to send ready-to-connect signal to Colyseus server
  readyToConnect() {
    this.room?.send(Message.READY_TO_CONNECT)
    eventEmitter.emit(Event.MY_PLAYER_READY)
  }

  // method to send ready-to-connect signal to Colyseus server
  videoConnected() {
    this.room?.send(Message.VIDEO_CONNECTED)
    eventEmitter.emit(Event.MY_PLAYER_VIDEO_CONNECTED)
  }

  // method to send stream-disconnection signal to Colyseus server
  playerStreamDisconnect(id: string) {
    this.room?.send(Message.DISCONNECT_STREAM, { clientId: id })
    this.webRTC?.deleteVideoStream(id)
  }

  connectToComputer(id: string) {
    this.room?.send(Message.CONNECT_TO_COMPUTER, { computerId: id })
  }

  disconnectFromComputer(id: string) {
    this.room?.send(Message.DISCONNECT_FROM_COMPUTER, { computerId: id })
  }

  connectToWhiteboard(id: string) {
    this.room?.send(Message.CONNECT_TO_WHITEBOARD, { whiteboardId: id })
  }

  disconnectFromWhiteboard(id: string) {
    this.room?.send(Message.DISCONNECT_FROM_WHITEBOARD, { whiteboardId: id })
  }

  onStopScreenShare(id: string) {
    this.room?.send(Message.STOP_SCREEN_SHARE, { computerId: id })
  }

  addChatMessage(content: string) {
    console.log('add chat message')
    this.room?.send(Message.ADD_CHAT_MESSAGE, { content: content })
  }

  addCommunityChatMessage(payload) {
    console.log('add chat message')
    this.room?.send(Message.COMMUNITY_CHAT_MESSAGE, payload)
  }

  addDirectChatMessage(selfInfo: any, client: any, content: string) {
    console.log('add direct chat message')
    const payload = {
      content: content,
      createdAt: new Date().getTime(),
      username: selfInfo.username,
    } as IChatMessage
    store.dispatch(pushDirectChatMessage(payload))
    this.room?.send(Message.DIRECT_CHAT_MESSAGE, {
      content: content,
      createdAt: payload.createdAt,
      receiver: client,
    })
  }
}
