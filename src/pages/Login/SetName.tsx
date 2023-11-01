import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TextField, LoginLayout } from '../../components'
// import { useAppDispatch, useAppSelector } from '../../hooks'
import { useAppDispatch } from '../../hooks'
// import phaserGame from '../../PhaserGame'
// import type Game from '../../scenes/Game'
import { setUser } from '../../stores/AuthStore'
import { setPlayerName } from '../../stores/UserStore'

import { LoginSubLayout } from './LoginSubLayout'

const SetName = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  React.useEffect(() => {
    // handleNext()
  }, [])
  // const playerName = useAppSelector((state) => state.user.playerName);
  const dispatch = useAppDispatch()
  // const [name, setName] = React.useState('')
  // const [confirmName, setConfirmName] = React.useState<string>('')
  // const [nameError, setNameError] = React.useState<string>('')
  // const [confirmError, setConfirmError] = React.useState<string>('')

  // const game = phaserGame.game as Game
  // const playerName = useAppSelector((state) => state.user.playerName)

  const handleNext = () => {
    // if (name !== '') {
    //   if (name === confirmName) {
    console.log('name is ', name)
    if (!name) {
      console.log('missing name')
      setError('* Missing Nickname')
      return
    }
    // const name = 'ASAC Rockey'
    dispatch(setUser({ username: name }))
    dispatch(setPlayerName(name))

    // if (game) {
    //   game.registerKeys()
    //   if (game.myPlayer) {
    //     console.log('set player name to ', playerName)
    //     game.myPlayer.setPlayerName(
    //       playerName ||
    //         (window as any).accountId ||
    //         (window as any).near?.accountId
    //     )
    //     game.myPlayer.setPlayerTexture('avatars[0].name')
    //     game.network.readyToConnect()
    //     // dispatch(setLoggedIn(true))
    //     navigate('/select-identity')
    //   } else {
    //     console.log('game.myPlayer is not defined')
    //   }
    // } else {
    //   console.log('game is not defined')
    // }
    navigate('/select-identity')
    //   } else {
    //     setConfirmError('The name must be match.')
    //   }
    // } else {
    //   // dispatch(showToast({message: "display name is not match."}));
    //   setNameError('This name has been taken.')
    // }
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setUsername({ username: un }));
    setName(event.target.value)
    setError('')
  }
  return (
    <LoginLayout>
      <LoginSubLayout
        stepper
        enable
        step={2}
        // goForward={() => navigate('/select-identity')}
        goForward={handleNext}
        goBack={() => navigate('/connect-wallet')}
      >
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">Set a Nickname</Typography>
          </Box>
          <Box mt="24px">
            <Typography variant="body2">
              This will be your public name on The Grid.
            </Typography>
          </Box>
          <Box mt="12px">
            <Typography variant="body2">
              Don’t stress fam. You can change this later if you want.{' '}
            </Typography>
          </Box>
          <Box mt="84px" flexDirection="column" gap="12px">
            <TextField fullWidth value={name} onChange={handleChange} />
            <Typography variant="caption" sx={{ textAlign: 'center' }}>
              {error}
            </Typography>
          </Box>
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}

export { SetName }
