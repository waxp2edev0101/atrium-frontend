import { Box, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/images/atrium-logo-large.png'
import colyseusGame from '../../ColyseusGame'
import { LoginLayout } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import type Bootstrap from '../../scenes/Bootstrap'
import { requestUser, signup } from '../../stores/AuthStore'

export default function LinearDeterminate({ progress }: { progress: number }) {
  return (
    <Box sx={{ '& .MuiLinearProgress-root': { width: '100%' }, width: '100%' }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          '& .MuiLinearProgress-bar': { background: 'white' },
          background: '#929292',
        }}
      />
    </Box>
  )
}
export const LoadScene = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const user = useAppSelector((state) => state.auth.user)
  const sessionId = useAppSelector((state) => state.user.sessionId)

  const [angle, setAngle] = useState(0)
  const [progress, setProgress] = useState<number>(0)

  // const user = useAppSelector((state) => state.auth.user)
  const lobbyJoined = useAppSelector((state) => state.room.lobbyJoined)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)

  useEffect(() => {
    const _signup = async () => {
      await dispatch(signup(user))
      await dispatch(requestUser())
    }

    _signup()

    loadScene()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          // return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (sessionId && sessionId != '' && progress == 100) navigate('/game')
  }, [sessionId, progress])

  useEffect(() => {
    setAngle(parseInt((progress / 25).toString()) * 90)
  }, [progress])

  const loadScene = () => {
    console.log('load scene')
    console.log(roomJoined, lobbyJoined)
    // if (!roomJoined && lobbyJoined) {
    const bootstrap = colyseusGame.bootstrap as Bootstrap
    bootstrap.network
      .joinOrCreatePublic()
      .then(() => {
        bootstrap.launchGame()
      })
      .catch((error) => console.error(error))
    // }
  }

  return (
    <LoginLayout>
      <Box
        p="24px"
        display="flex"
        height="100%"
        pt="220px"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          '& div': {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">User Account All Setup!</Typography>
          </Box>
          <Box mt="24px">
            <Typography variant="caption">
              We’re now loading you into Atrium,
            </Typography>
          </Box>
          <Box mt="12px">
            <Typography variant="caption">
              enjoy your stay ASAP Rocky.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            width="360px"
            height="360px"
            sx={{
              transform: `rotate(${angle}deg)`,
              transition: 'transform 1s',
            }}
          >
            <img src={logo} alt="" width="100%" height="100%" />
          </Box>
        </Box>
        <Box width="100%">
          {/* <LinearDeterminate rotate={rotate} loadScene={loadScene} /> */}
          <LinearDeterminate progress={progress} />
        </Box>
      </Box>
    </LoginLayout>
  )
}
