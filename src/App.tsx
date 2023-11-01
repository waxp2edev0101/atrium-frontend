import { Container, Snackbar, Alert } from '@mui/material'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { PrivateRoute } from './components'
import { useAppDispatch, useAppSelector } from './hooks'
import {
  ConnectWallet,
  SelectIdentity,
  SelectSkin,
  SetName,
  GameUI,
  Welcome,
  Signin,
  LoadScene,
  ClubBoardUI,
  LoginSuccess,
} from './pages'
import { setSnackbarOpen } from './stores/AppStore'
import { setWalletConnected } from './stores/UserStore'
import { getAccount } from './utils'

const App = () => {
  const vertical = 'top'
  const horizontal = 'right'

  const dispatch = useAppDispatch()

  const open = useAppSelector((state) => state.app.snack.open)
  const message = useAppSelector((state) => state.app.snack.content)
  const type = useAppSelector((state) => state.app.snack.type)

  useEffect(() => {
    const account = getAccount()
    dispatch(setWalletConnected(account.accountId !== ''))
  }, [])

  const handleClose = () => dispatch(setSnackbarOpen(false))
  return (
    <Container
      maxWidth="xl"
      sx={{ height: '100%', px: '0px' }}
      style={{ position: 'absolute' }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/select-identity" element={<SelectIdentity />} />
          <Route path="/select-skin" element={<SelectSkin />} />
          <Route path="/set-name" element={<SetName />} />
          <Route path="/load-scene" element={<LoadScene />} />
          <Route path="/game" element={<GameUI />} />
          <Route path="/club-board" element={<ClubBoardUI />} />
          <Route path="/success" element={<LoginSuccess />} />
        </Routes>
      </BrowserRouter>
      <Snackbar
        anchorOrigin={{ horizontal, vertical }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        autoHideDuration={5000}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          sx={{
            borderRadius: 0,
            fontFamily: 'Fractul Alt',
            width: '100%',
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default App
