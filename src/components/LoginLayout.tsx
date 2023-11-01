import { CssBaseline, Box, Container } from '@mui/material'
import * as React from 'react'
// import { useNavigate } from 'react-router-dom'

// import { CWindow } from '../../types/Window';
// import { useAppSelector } from '../hooks'
// declare let window: CWindow;
import '../styles/login.scss'

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  // const connected = useAppSelector((state) => state.user.walletConnected)
  // const navigate = useNavigate()

  React.useEffect(() => {
    // if (connected || (window as any)?.accountId) {
    //   console.log('wallet connection is ', connected);
    //   navigate('/set-name');
    //   return;
    // }
    // navigate('/');
    // if (!connected && !(window as any)?.accountId) {
    //   navigate('/')
    // }
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box position="relative" width="100%" height="100%">
          <Box className="login" height="100%">
            <Box
              sx={{ bgcolor: 'black', height: '100%', opacity: '0.5' }}
            ></Box>
          </Box>
          <Box
            sx={{ height: '100%', position: 'absolute', top: 0, width: '100%' }}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export { LoginLayout }
