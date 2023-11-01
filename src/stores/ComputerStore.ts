import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { MediaConnection } from 'peerjs'

import colyseusGame from '../ColyseusGame'
import type Game from '../scenes/Game'
import { sanitizeId } from '../util'
import ShareScreenManager from '../web/ShareScreenManager'

interface ComputerState {
  computerDialogOpen: boolean
  computerId: null | string
  myStream: null | MediaStream
  peerStreams: Map<
    string,
    {
      stream: MediaStream
      call: MediaConnection
    }
  >
  shareScreenManager: null | ShareScreenManager
}

const initialState: ComputerState = {
  computerDialogOpen: false,
  computerId: null,
  myStream: null,
  peerStreams: new Map(),
  shareScreenManager: null,
}

export const computerSlice = createSlice({
  initialState,
  name: 'computer',
  reducers: {
    addVideoStream: (
      state,
      action: PayloadAction<{
        id: string
        call: MediaConnection
        stream: MediaStream
      }>
    ) => {
      state.peerStreams.set(sanitizeId(action.payload.id), {
        call: action.payload.call,
        stream: action.payload.stream,
      })
    },
    closeComputerDialog: (state) => {
      // Tell server the computer dialog is closed.
      const game = colyseusGame.game as Game
      game.enableKeys()
      game.network.disconnectFromComputer(state.computerId!)
      for (const { call } of state.peerStreams.values()) {
        call.close()
      }
      state.shareScreenManager?.onClose()
      state.computerDialogOpen = false
      state.myStream = null
      state.computerId = null
      state.peerStreams.clear()
    },
    openComputerDialog: (
      state,
      action: PayloadAction<{ computerId: string; myUserId: string }>
    ) => {
      if (!state.shareScreenManager) {
        state.shareScreenManager = new ShareScreenManager(
          action.payload.myUserId
        )
      }
      const game = colyseusGame.game as Game
      game.disableKeys()
      state.shareScreenManager.onOpen()
      state.computerDialogOpen = true
      state.computerId = action.payload.computerId
    },
    removeVideoStream: (state, action: PayloadAction<string>) => {
      state.peerStreams.delete(sanitizeId(action.payload))
    },
    setMyStream: (state, action: PayloadAction<null | MediaStream>) => {
      state.myStream = action.payload
    },
  },
})

export const {
  closeComputerDialog,
  openComputerDialog,
  setMyStream,
  addVideoStream,
  removeVideoStream,
} = computerSlice.actions

export default computerSlice.reducer
