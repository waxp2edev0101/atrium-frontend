import Box from '@mui/material/Box'
// import Text from '@mui/material/Typography'
import React from 'react'

import { FractulAltText } from '../../../components/Styled'
import { palette } from '../../../MuiTheme'

const Roadmap = () => {
  return (
    <Box
      sx={{
        border: `2px solid ${palette.border.dark}`,
        display: 'flex',
        flexDirection: 'column',
        height: 210,
        justifyContent: 'flex-end',
        padding: '12px',
        width: 210,
      }}
    >
      <FractulAltText
        variant="h5"
        sx={{
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Roadmap
      </FractulAltText>
    </Box>
  )
}

export default Roadmap
