import { InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `${(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #2E3134',

    borderRadius: 0,

    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    fontSize: 16,

    padding: '10px 12px',

    position: 'relative',

    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    width: 'auto',
  },
  'label + &': {
    marginTop: theme.spacing(3),
  },
}))

export const AntSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#90E487' : '#1890ff',
        opacity: 1,
      },
      color: '#fff',
      transform: 'translateX(18px)',
    },
    padding: 2,
  },
  '& .MuiSwitch-thumb': {
    borderRadius: 10,
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    height: 16,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
    width: 16,
  },
  '& .MuiSwitch-track': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    borderRadius: 20 / 2,
    boxSizing: 'border-box',
    opacity: 1,
  },
  '&:active': {
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(18px)',
    },
    '& .MuiSwitch-thumb': {
      width: 16,
    },
  },
  display: 'flex',
  height: 20,
  padding: 0,
  width: 40,
}))
