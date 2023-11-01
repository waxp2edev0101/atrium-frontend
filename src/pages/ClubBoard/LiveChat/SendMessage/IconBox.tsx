import Box from '@mui/material/Box'

import { palette } from '../../../../MuiTheme'

const IconBox = ({ children }) => (
  <Box
    sx={{
      alignItems: 'center',
      border: `2px solid ${palette.border.dark}`,
      display: 'flex',
      height: '45px',
      justifyContent: 'center',
      width: '45px',
    }}
  >
    {children}
  </Box>
)

export default IconBox
