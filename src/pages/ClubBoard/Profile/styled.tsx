import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Text = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  fontFamily: 'Andale Mono Regular',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: '-0.05em',
  lineHeight: '120%',
}))
