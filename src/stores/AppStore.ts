import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IUser, IPost } from '../types/model'

export type TAlert = 'error' | 'warning' | 'success' | 'info'

export type TSnack = {
  open: boolean
  type: TAlert
  content: string
}

export const AppSlice = createSlice({
  initialState: {
    communityId: '',
    currentPost: {} as IPost,
    currentUserId: '',
    profile: {} as IUser,
    searchUserCriteria: '',
    snack: { content: '', open: false, type: 'info' } as TSnack,
  },
  name: 'app',
  reducers: {
    openSnack: (state, action: PayloadAction<TSnack>) => {
      state.snack = {
        content: action.payload.content,
        open: true,
        type: action.payload.type,
      }
    },
    setCommunityId: (state, action: PayloadAction<string>) => {
      state.communityId = action.payload
    },
    setCurrentPost: (state, action: PayloadAction<IPost>) => {
      state.currentPost = action.payload
    },
    setCurrentUserId: (state, action: PayloadAction<string>) => {
      state.currentUserId = action.payload
    },
    setProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload
    },
    setSearchUserCriteria: (state, action: PayloadAction<string>) => {
      state.searchUserCriteria = action.payload
    },
    setSnackbarOpen: (state, action: PayloadAction<boolean>) => {
      state.snack = { ...state.snack, open: action.payload }
    },
  },
})

export const {
  setSearchUserCriteria,
  setProfile,
  setSnackbarOpen,
  openSnack,
  setCommunityId,
  setCurrentUserId,
  setCurrentPost,
} = AppSlice.actions

export default AppSlice.reducer
