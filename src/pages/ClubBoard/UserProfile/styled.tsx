import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  border: `1px solid #2E3134`,
  marginBottom: '20px !important',
  padding: '30px',
}))

export const OnlineIcon = styled(Box)(() => ({
  background: 'yellow',
  borderRadius: '25px',
  height: '10px',
  width: '10px',
}))

export const OfflineIcon = styled(Box)(() => ({
  background: 'gray',
  borderRadius: '25px',
  height: '10px',
  width: '10px',
}))
