import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { BackgroundMode } from '../types/BackgroundMode'
import { sanitizeId } from '../util'

import type { RootState } from './index'

export function getInitialBackgroundMode() {
  const currentHour = new Date().getHours()
  return currentHour > 6 && currentHour <= 18
    ? BackgroundMode.DAY
    : BackgroundMode.NIGHT
}

const initialBackGroundMode = getInitialBackgroundMode()

export const userSlice = createSlice({
  initialState: {
    avatars: new Array<string>(),
    backgroundMode: initialBackGroundMode,
    friends: new Array(),
    isMyPlayerReady: false,
    loggedIn: false,
    playerAvatar: '',
    playerName: '',
    playerNameMap: new Map<string, string>(),
    sessionId: '',
    videoConnected: false,
    walletConnected: false,
  },
  name: 'user',
  reducers: {
    addAvatar: (state, action: PayloadAction<string>) => {
      state.avatars = [...state.avatars, action.payload]
    },
    clearAvatars: (state) => {
      state.avatars = new Array<string>()
    },
    removePlayerNameMap: (state, action: PayloadAction<string>) => {
      state.playerNameMap.delete(sanitizeId(action.payload))
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload
    },
    setMyPlayerReady: (state, action: PayloadAction<boolean>) => {
      state.isMyPlayerReady = action.payload
    },
    setPlayerAvatar: (state, action: PayloadAction<string>) => {
      state.playerAvatar = action.payload
    },
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.playerName = action.payload
    },
    setPlayerNameMap: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.playerNameMap.set(
        sanitizeId(action.payload.id),
        action.payload.name
      )
    },
    setSessionId: (state, action: PayloadAction<string>) => {
      state.sessionId = action.payload
    },
    setVideoConnected: (state, action: PayloadAction<boolean>) => {
      state.videoConnected = action.payload
    },
    setWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.walletConnected = action.payload
    },
    toggleBackgroundMode: (state) => {
      const newMode =
        state.backgroundMode === BackgroundMode.DAY
          ? BackgroundMode.NIGHT
          : BackgroundMode.DAY

      state.backgroundMode = newMode
    },
    updateFriend: (state, action: PayloadAction<any>) => {
      const payload = action.payload
      if (payload.length > 0) {
        payload.forEach((elem) => {
          let _index = state.friends.findIndex(
            (friend) => elem.username == friend.username
          )

          if (_index === -1) {
            state.friends.push(elem)
          } else {
            state.friends[_index] = { ...state.friends[_index], ...elem }
          }
        })
      } else {
        if (payload.username) {
          const index = state.friends.findIndex(
            (friend) => friend.username === payload.username
          )
          if (index == -1) {
            state.friends.push(payload)
          } else {
            state.friends[index] = { ...state.friends[index], ...payload }
          }
        }
      }
    },
  },
})

export const selectBackGroundMode = (state: RootState) =>
  state.user.backgroundMode

export const {
  toggleBackgroundMode,
  setSessionId,
  setVideoConnected,
  setLoggedIn,
  setPlayerNameMap,
  removePlayerNameMap,
  setWalletConnected,
  setPlayerName,
  addAvatar,
  clearAvatars,
  setPlayerAvatar,
  setMyPlayerReady,
  updateFriend,
} = userSlice.actions

export default userSlice.reducer
