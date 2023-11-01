import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
// import { sanitizeId } from '../util'

export const settingSlice = createSlice({
  initialState: {
    settingDialogOpen: false,
  },
  name: 'setting',
  reducers: {
    setSettingDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.settingDialogOpen = action.payload
    },
  },
})

export const { setSettingDialogOpen } = settingSlice.actions

export default settingSlice.reducer
