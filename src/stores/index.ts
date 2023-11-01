import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
import { persistStore } from 'redux-persist'

import appReducer from './AppStore'
import authReducer from './AuthStore'
import chatReducer from './ChatStore'
import communityReducer from './CommunityStore'
import computerReducer from './ComputerStore'
import { toggleBackGroundListener } from './listener'
import roomReducer from './RoomStore'
import settingReducer from './SettingStore'
import uiReducer from './UiStore'
import userReducer, { toggleBackgroundMode } from './UserStore'
import whiteboardReducer from './WhiteboardStore'

const listenerMiddleware = createListenerMiddleware()
enableMapSet()

listenerMiddleware.startListening({
  actionCreator: toggleBackgroundMode,
  effect: toggleBackGroundListener,
})

const store = configureStore({
  // Temporary disable serialize check for redux as we store MediaStream in ComputerStore.
  // https://stackoverflow.com/a/63244831
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    app: appReducer,
    auth: authReducer,
    chat: chatReducer,
    community: communityReducer,
    computer: computerReducer,
    room: roomReducer,
    setting: settingReducer,
    ui: uiReducer,
    user: userReducer,
    whiteboard: whiteboardReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store
