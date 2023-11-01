import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Button, Container, Grid, IconButton } from '@mui/material'
import { useState, useEffect } from 'react'

import Adam from '../assets/Adam_login.png'
import Ash from '../assets/Ash_login.png'
import Lucy from '../assets/Lucy_login.png'
import Nancy from '../assets/Nancy_login.png'
import colyseusGame from '../ColyseusGame'
import { useAppSelector, useAppDispatch } from '../hooks'
import type Bootstrap from '../scenes/Bootstrap'
import { setPlayerName, setWalletConnected } from '../stores/UserStore'
import type { IRoomData } from '../types/Rooms'
import { loginNear, loginSender } from '../utils'

import { CustomRoomTable } from './CustomRoomTable'
import { Stepper } from './elements'

enum Wallet {
  Near,
  Sender,
  None,
}

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

const WalletConnectionForm = () => {
  const dispatch = useAppDispatch()
  const [walletType, setWalletType] = useState(Wallet.None)
  const login = async () => {
    if (walletType === Wallet.Near) {
      await loginNear()
    } else if (walletType === Wallet.Sender) {
      // logoutNear();
      ;(window as any).walletConnection?.signOut()
      await loginSender()
      dispatch(setWalletConnected(true))
    } else {
    }
  }
  return (
    <Container>
      <div className="login_panel">
        <div>
          <h1>Connect Wallet</h1>
          <p>Connect your wallet to get started on your Web3 Journey</p>
          <Button
            onClick={() => setWalletType(Wallet.Near)}
            className={`atrium_btn ${
              walletType === Wallet.Near ? 'active' : ''
            }`}
            sx={{ mt: '12px' }}
          >
            NEAR Wallet
          </Button>
          <Button
            className={`atrium_btn ${
              walletType === Wallet.Sender ? 'active' : ''
            }`}
            onClick={() => setWalletType(Wallet.Sender)}
          >
            Sender Wallet
          </Button>
          <Button
            className="atrium_btn atrium_btn_primary"
            onClick={login}
            sx={{ mt: '56px' }}
          >
            NEXT
          </Button>
          <Stepper length={5} step={0} />
        </div>
        <Box sx={{ mt: '36px' }}>
          <p className="atrium_text_secondary">
            Already have an account?
            <span className="atrium_text_light"> Log in now</span>
          </p>
        </Box>
      </div>
    </Container>
  )
}

// Might be middle of implementation any feature?
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CreateRoomForm = () => {
  const [showCustomRoom, setShowCustomRoom] = useState(true)
  const [values, setValues] = useState<IRoomData>({
    autoDispose: true,
    description: 'game room',
    name: '',
    password: null,
  })
  const create = () => {
    if (values.name) {
      console.log(values)
      const bootstrap = colyseusGame.bootstrap as Bootstrap
      bootstrap.network
        .createCustom(values)
        .then(() => {
          bootstrap.launchGame()
        })
        .catch((error) => console.error(error))
    }
  }

  const handleChange =
    (prop: keyof IRoomData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: e.target.value })
    }
  return (
    <>
      {showCustomRoom ? (
        <Container>
          <div className="login_panel">
            <div>
              <h1>Create Room</h1>
              <p style={{ marginBottom: '12px' }}>
                Create a room by custom room name or your near account id.
              </p>
              <Box sx={{ mt: '36px' }}>
                <CustomRoomTable />
              </Box>
              <Button
                onClick={() => setShowCustomRoom(false)}
                className="atrium_btn atrium_btn_primary"
                sx={{ mt: '56px' }}
              >
                Create New Room
              </Button>
              <Button className="atrium_btn">Skip</Button>
            </div>
            <Box sx={{ mt: '36px' }}>
              <p className="atrium_text_secondary">
                Already have an account?
                <span className="atrium_text_light"> Log in now</span>
              </p>
            </Box>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="login_panel">
            <div>
              <Box>
                <IconButton onClick={() => setShowCustomRoom(true)}>
                  <ArrowBackIcon />
                </IconButton>
              </Box>
              <h1>Create Room</h1>
              <p style={{ marginBottom: '12px' }}>
                Create a room by custom room name or your near account id.
              </p>
              <Box sx={{ mt: '36px' }}>
                {/* <InputField
                label="room name"
                value={roomName}
                handleChange={(name: string) => dispatch(setRoomName({ roomName: name }))}
                error={error}
                setError={setError}
              /> */}
                <div className="input_group">
                  <input
                    onChange={handleChange('name')}
                    className="form_control"
                  />
                </div>
              </Box>
              <Button
                onClick={create}
                className="atrium_btn atrium_btn_primary"
                sx={{ mt: '56px' }}
              >
                Create
              </Button>
              <Button className="atrium_btn">Skip</Button>
            </div>
            <Box sx={{ mt: '36px' }}>
              <p className="atrium_text_secondary">
                Already have an account?
                <span className="atrium_text_light"> Log in now</span>
              </p>
            </Box>
          </div>
        </Container>
      )}
    </>
  )
}

const SetProfile = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const handleConnect = () => {
    const bootstrap = colyseusGame.bootstrap as Bootstrap
    bootstrap.network
      .joinOrCreatePublic()
      .then(() => bootstrap.launchGame())
      .catch((error) => console.error(error))
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const connect = () => {
    dispatch(setPlayerName(name))
    handleConnect()
  }
  return (
    <Container>
      <div className="login_panel">
        <div>
          <h1>Create Room</h1>
          <p style={{ marginBottom: '12px' }}>
            Create a room by custom room name or your near account id.
          </p>
          <Box sx={{ mt: '36px' }} className="input_group">
            <label>Name</label>
            <input
              className="form_control"
              value={name}
              onChange={handleChange}
            />
            <label>Description</label>
            <textarea
              className="form_control"
              rows={4}
              style={{ marginTop: '12px', width: '100%' }}
            />
          </Box>
          <Button
            onClick={connect}
            className="atrium_btn atrium_btn_primary"
            sx={{ mt: '56px' }}
          >
            Connect
          </Button>
          <Button className="atrium_btn" onClick={handleConnect}>
            Skip
          </Button>
        </div>
        <Box sx={{ mt: '36px' }}>
          <p className="atrium_text_secondary">
            Already have an account?
            <span className="atrium_text_light"> Log in now</span>
          </p>
        </Box>
      </div>
    </Container>
  )
}
const RoomSelectionDialog = () => {
  const dispatch = useAppDispatch()
  const connected = useAppSelector((state) => state.user.walletConnected)
  // const [connected, setConnected] = useState(false);
  // // const [showRooms, setShowRooms] = useState(false);
  useEffect(() => {
    if ((window as any)?.accountId) {
      dispatch(setWalletConnected(true))
    }
  }, [])
  return (
    <>
      <Container>
        <Grid container>
          <Grid item md={8}></Grid>
          <Grid item md={4}>
            {/* { connected ? <CreateRoomForm /> : <WalletConnectionForm /> } */}
            {connected ? <SetProfile /> : <WalletConnectionForm />}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default RoomSelectionDialog
