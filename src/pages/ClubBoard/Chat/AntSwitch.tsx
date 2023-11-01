import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

export const AntSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        opacity: 1,
      },
      color: '#fff',
      transform: 'translateX(12px)',
    },
    padding: 2,
  },
  '& .MuiSwitch-thumb': {
    borderRadius: 6,
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    height: 12,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
    width: 12,
  },
  '& .MuiSwitch-track': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    borderRadius: 16 / 2,
    boxSizing: 'border-box',
    opacity: 1,
  },
  '&:active': {
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
    '& .MuiSwitch-thumb': {
      width: 15,
    },
  },
  display: 'flex',
  height: 16,
  padding: 0,
  width: 28,
}))
