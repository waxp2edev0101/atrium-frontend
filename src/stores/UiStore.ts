import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const UiSlice = createSlice({
  initialState: {
    boardDialogOpen: false,
    currentBoardTab: 0,
    searchUiOpen: false,
  },
  name: 'ui',
  reducers: {
    setBoardDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.boardDialogOpen = action.payload
    },
    setCurrentBoardTab: (state, action: PayloadAction<number>) => {
      state.currentBoardTab = action.payload
    },
    setSearchUiOpen: (state, action: PayloadAction<boolean>) => {
      state.searchUiOpen = action.payload
    },
  },
})

export const { setBoardDialogOpen, setCurrentBoardTab, setSearchUiOpen } =
  UiSlice.actions

export default UiSlice.reducer
