import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import avatar from '../../assets/images/avatar-9.png'
import colyseusGame from '../../ColyseusGame'
import { LoginLayout } from '../../components'
import { useAppSelector } from '../../hooks'
import { palette } from '../../MuiTheme'
import type Bootstrap from '../../scenes/Bootstrap'

import { LoginSubLayout } from './LoginSubLayout'

const LoginSuccess = () => {
  const user = useAppSelector((state) => state.auth.user)
  // const lobbyJoined = useAppSelector((state) => state.room.lobbyJoined)
  // const roomJoined = useAppSelector((state) => state.room.roomJoined)

  const navigate = useNavigate()

  const handleForward = () => {
    // if (!roomJoined && lobbyJoined) {
    const bootstrap = colyseusGame.bootstrap as Bootstrap
    bootstrap.network
      .joinOrCreatePublic()
      .then(() => {
        bootstrap.launchGame()
        // navigate('/game')
        navigate('/club-board')
      })
      .catch((error) =>
        console.error('Error occurred while join public lobby', error)
      )
    // }
  }
  // console.log(handleForward)
  return (
    <LoginLayout>
      <LoginSubLayout
        stepper
        enable
        goForward={handleForward}
        goBack={() => navigate('/signin')}
      >
        <Box flexDirection="column" gap={`32px`}>
          <Box mt="32px" justifyContent="center">
            <Box
              width="160px"
              height="160px"
              borderRadius="102px"
              border={`1px solid ${palette.text.primary}`}
            >
              {avatar && (
                <img
                  src={user.avatar}
                  width="160px"
                  height="160px"
                  style={{
                    border: `1px solid ${palette.text.primary}`,
                    borderRadius: `50%`,
                  }}
                />
              )}
            </Box>
          </Box>
          <Box sx={{ mb: '50px' }} flexDirection="column" gap="12px">
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              Welcome Back!
            </Typography>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              Welcome Back to Atrium,
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
              {user.username}
            </Typography>
          </Box>
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}

export { LoginSuccess }
