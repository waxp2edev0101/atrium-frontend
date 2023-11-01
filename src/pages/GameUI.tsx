import React from 'react'
import styled from 'styled-components'

// import LoginDialog from './components/LoginDialog'
// import VideoConnectionDialog from '../components/VideoConnectionDialog'

import Adam from '../assets/Adam_login.png'
import Ash from '../assets/Ash_login.png'
import Lucy from '../assets/Lucy_login.png'
import Nancy from '../assets/Nancy_login.png'
import colyseusGame from '../ColyseusGame'
import { PopupMenuGroup, ItemMenu } from '../components'
// import RoomSelectionDialog from '../components/_RoomSelectionDialog'
import Chat from '../components/Chat'
import ComputerDialog from '../components/ComputerDialog'
// import HelperButtonGroup from '../components/HelperButtonGroup'
import SettingDialog from '../components/SettingDialog'
import UnityGame from '../components/UnityGame'
import WhiteboardDialog from '../components/WhiteboardDialog'
import { useAppDispatch, useAppSelector } from '../hooks'
import type Game from '../scenes/Game'
import { setLoggedIn } from '../stores/UserStore'

import { ClubBoardDialog } from './ClubBoard'

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

const avatars = [
  { img: Adam, name: 'adam' },
  { img: Ash, name: 'ash' },
  { img: Lucy, name: 'lucy' },
  { img: Nancy, name: 'nancy' },
]

// shuffle the avatars array
for (let i = avatars.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  ;[avatars[i], avatars[j]] = [avatars[j], avatars[i]]
}

function GameUI() {
  const dispatch = useAppDispatch()
  const game = colyseusGame.game as Game
  const loggedIn = useAppSelector((state) => state.user.loggedIn)
  const playerName = useAppSelector((state) => state.user.playerName)
  const computerDialogOpen = useAppSelector(
    (state) => state.computer.computerDialogOpen
  )
  const whiteboardDialogOpen = useAppSelector(
    (state) => state.whiteboard.whiteboardDialogOpen
  )
  // const videoConnected = useAppSelector((state) => state.user.videoConnected)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)
  const settingDialogOpen = useAppSelector(
    (state) => state.setting.settingDialogOpen
  )

  React.useEffect(() => {
    if (game) {
      game.registerKeys()
      if (game.myPlayer) {
        console.log('set player name to ', playerName)
        game.myPlayer.setPlayerName(
          playerName ||
            (window as any).accountId ||
            (window as any).near?.accountId
        )
        // game.myPlayer.setPlayerTexture(avatars[0].name)
        if (game.network) {
          game.network.readyToConnect()
          dispatch(setLoggedIn(true))
        }
      }
    }
  }, [])

  let ui: JSX.Element
  if (loggedIn) {
    if (computerDialogOpen) {
      /* Render ComputerDialog if user is using a computer. */
      ui = <ComputerDialog />
    } else if (whiteboardDialogOpen) {
      /* Render WhiteboardDialog if user is using a whiteboard. */
      ui = <WhiteboardDialog />
    } else if (settingDialogOpen) {
      ui = <SettingDialog />
    } else {
      ui = (
        /* Render Chat or VideoConnectionDialog if no dialogs are opened. */
        <>
          <UnityGame />
          <Chat />
          <ItemMenu />
          {/* Render VideoConnectionDialog if user is not connected to a webcam. */}
          {/* {!videoConnected && <VideoConnectionDialog />} */}
        </>
      )
    }
  } else if (roomJoined) {
    /* Render LoginDialog if not logged in but selected a room. */
    // ui = <LoginDialog />
    // if (game) {
    //   game.registerKeys()
    //   if (game.myPlayer) {
    //     console.log('set player name to ', playerName)
    //     game.myPlayer.setPlayerName(
    //       playerName ||
    //         (window as any).accountId ||
    //         (window as any).near?.accountId
    //     )
    //     game.myPlayer.setPlayerTexture(avatars[0].name)
    //     game.network.readyToConnect()
    //     dispatch(setLoggedIn(true))
    //   }
    // }
    ui = <></>
    // console.log('room joined');
  } else {
    /* Render RoomSelectionDialog if yet selected a room. */
    ui = <></>
    // ui = <RoomSelectionDialog />
    // ui = <div></div>
  }

  return (
    <Backdrop>
      {ui}
      {/* Render HelperButtonGroup if no dialogs are opened. */}
      {/* {!computerDialogOpen && !whiteboardDialogOpen && <HelperButtonGroup />} */}
      {!computerDialogOpen && !whiteboardDialogOpen && <PopupMenuGroup />}
      <ClubBoardDialog />
    </Backdrop>
  )
}

export { GameUI }
