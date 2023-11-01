import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { ICommunity } from '../types/model'

export const communitySlice = createSlice({
  initialState: {
    data: {} as ICommunity,
  },
  name: 'community',
  reducers: {
    setCommunity: (state, action: PayloadAction<ICommunity>) => {
      state.data = action.payload
    },
  },
})

export const { setCommunity } = communitySlice.actions
export default communitySlice.reducer
