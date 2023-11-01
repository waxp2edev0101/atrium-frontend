import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import colyseusGame from '../ColyseusGame'
import type Game from '../scenes/Game'
import type { IChatMessage } from '../types/IOfficeState'

export enum MessageType {
  PLAYER_JOINED,
  PLAYER_LEFT,
  REGULAR_MESSAGE,
  FRIEND_MESSAGE,
  COMMUNITY_MESSAGE,
}

export const chatSlice = createSlice({
  initialState: {
    chatMessages: new Array<{
      messageType: MessageType
      chatMessage: IChatMessage
    }>(),
    communityChatMessages: {},
    focused: false,
    friendChatMessages: new Array<{
      messageType: MessageType
      chatMessage: IChatMessage
    }>(),
    showChat: true,
  },
  name: 'chat',
  reducers: {
    pushChatMessage: (state, action: PayloadAction<IChatMessage>) => {
      state.chatMessages.push({
        chatMessage: action.payload,
        messageType: MessageType.REGULAR_MESSAGE,
      })
    },
    pushCommunityChatMessage: (state, action: PayloadAction<any>) => {
      const channel = action.payload.channel
      if (!state.communityChatMessages[channel]) {
        state.communityChatMessages[channel] = []
      }
      state.communityChatMessages[channel].push({
        chatMessage: action.payload.chatMessage,
        user: action.payload.user,
      })
    },
    pushDirectChatMessage: (state, action: PayloadAction<IChatMessage>) => {
      state.friendChatMessages.push({
        chatMessage: action.payload,
        messageType: MessageType.FRIEND_MESSAGE,
      })
    },
    pushPlayerJoinedMessage: (state, action: PayloadAction<string>) => {
      state.chatMessages.push({
        chatMessage: {
          content: 'joined the lobby',
          createdAt: new Date().getTime(),
          username: action.payload,
        } as IChatMessage,
        messageType: MessageType.PLAYER_JOINED,
      })
    },
    pushPlayerLeftMessage: (state, action: PayloadAction<string>) => {
      state.chatMessages.push({
        chatMessage: {
          content: 'left the lobby',
          createdAt: new Date().getTime(),
          username: action.payload,
        } as IChatMessage,
        messageType: MessageType.PLAYER_LEFT,
      })
    },
    setFocused: (state, action: PayloadAction<boolean>) => {
      const game = colyseusGame.game as Game
      action.payload ? game.disableKeys() : game.enableKeys()
      state.focused = action.payload
    },
    setShowChat: (state, action: PayloadAction<boolean>) => {
      state.showChat = action.payload
    },
  },
})

export const {
  pushChatMessage,
  pushCommunityChatMessage,
  pushDirectChatMessage,
  pushPlayerJoinedMessage,
  pushPlayerLeftMessage,
  setFocused,
  setShowChat,
} = chatSlice.actions

export default chatSlice.reducer
