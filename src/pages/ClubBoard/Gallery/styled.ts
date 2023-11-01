import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import { palette } from '../../../MuiTheme'

export const Root = styled(Box)(() => ({
  backgroundColor: palette.widget.background,
  border: `2px solid ${palette.border.dark}`,
  display: 'flex',
  height: 450,
  width: 890,
}))

export const Left = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: 450,
  padding: '15px 30px',
  width: 290,
}))

export const Right = styled(Box)(() => ({
  padding: '0 30px',
  paddingTop: '40px',
}))
