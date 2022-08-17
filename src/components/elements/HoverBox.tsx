import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const HoverBox = styled(Box)(() => ({
  '&:hover': {
    cursor: 'pointer',
  },
}))
