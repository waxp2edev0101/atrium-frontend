import { Typography } from '@mui/material'
import styled from '@mui/material/styles/styled'

export const FractulText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: 'Fractul',
  fontStyle: 'normal',
  textTransform: 'capitalize',
}))
export const FractulAltText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: 'Fractul Alt',
  fontStyle: 'normal',
  textTransform: 'capitalize',
}))

export const AndaleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: 'Andale Mono Regular',
  fontStyle: 'normal',
  textTransform: 'capitalize',
}))

export const DisabledText = styled(AndaleText)(({ theme }) => ({
  color: theme.palette.text.disabled,
}))
