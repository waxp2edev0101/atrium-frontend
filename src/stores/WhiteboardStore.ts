import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import colyseusGame from '../ColyseusGame'
import type Game from '../scenes/Game'

interface WhiteboardState {
  whiteboardDialogOpen: boolean
  whiteboardId: null | string
  whiteboardUrl: null | string
  urls: Map<string, string>
}

const initialState: WhiteboardState = {
  urls: new Map(),
  whiteboardDialogOpen: false,
  whiteboardId: null,
  whiteboardUrl: null,
}

export const whiteboardSlice = createSlice({
  initialState,
  name: 'whiteboard',
  reducers: {
    closeWhiteboardDialog: (state) => {
      const game = colyseusGame.game as Game
      game.enableKeys()
      game.network.disconnectFromWhiteboard(state.whiteboardId!)
      state.whiteboardDialogOpen = false
      state.whiteboardId = null
      state.whiteboardUrl = null
    },
    openWhiteboardDialog: (state, action: PayloadAction<string>) => {
      state.whiteboardDialogOpen = true
      state.whiteboardId = action.payload
      const url = state.urls.get(action.payload)
      if (url) state.whiteboardUrl = url
      const game = colyseusGame.game as Game
      game.disableKeys()
    },
    setWhiteboardUrls: (
      state,
      action: PayloadAction<{ whiteboardId: string; roomId: string }>
    ) => {
      state.urls.set(
        action.payload.whiteboardId,
        `https://www.tldraw.com/r/sky-office-${action.payload.roomId}`
      )
    },
  },
})

export const {
  openWhiteboardDialog,
  closeWhiteboardDialog,
  setWhiteboardUrls,
} = whiteboardSlice.actions

export default whiteboardSlice.reducer
