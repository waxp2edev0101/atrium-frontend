import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AText = styled(Typography)(({ theme }) => ({
  '&.description': {
    fontFamily: 'Andale Mono Regular',
    letterSpacing: '-0.05em',
    lineHeight: '120%',
  },
  '&.disabled': {
    color: theme.palette.text.disabled,
    fontFamily: 'Andale Mono Regular',
    fontSize: '18px',
    fontWeight: '400',
  },
  '&.subtitle': {
    color: theme.palette.text.primary,
    fontSize: '40px',
    fontWeight: 800,
    lineHeight: '32px',
  },
  color: theme.palette.text.primary,
  fontFamily: 'Fractul',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 400,
  textTransform: 'capitalize',
}))
