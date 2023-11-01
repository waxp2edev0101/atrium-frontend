import Network from '../services/Network'
import store from '../stores'
import { setRoomJoined } from '../stores/RoomStore'
import type { BackgroundMode } from '../types/BackgroundMode'

import type Game from './Game'

export default class Bootstrap {
  network!: Network
  game!: Game

  constructor() {
    this.init()
  }

  init() {
    this.network = new Network()
  }

  create(game: Game) {
    // this.launchBackground(store.getState().user.backgroundMode)
    this.game = game
  }

  private launchBackground(backgroundMode: BackgroundMode) {
    console.log(backgroundMode)
    // this.scene.launch('background', { backgroundMode })
  }

  launchGame() {
    // this.network.webRTC?.checkPreviousPermission()
    this.game.create({
      network: this.network,
    })

    // update Redux state
    store.dispatch(setRoomJoined(true))
  }

  changeBackgroundMode(backgroundMode: BackgroundMode) {
    // this.scene.stop('background')
    this.launchBackground(backgroundMode)
  }
}
