import PushPinIcon from '@mui/icons-material/PushPin'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
// import Text from '@mui/material/Typography'
import React from 'react'

import { FractulText } from '../../../components/Styled'
import muiTheme from '../../../MuiTheme'

const Heading: React.FC = () => (
  <>
    <FractulText variant="h5" textAlign="center" color="#fff">
      Live Chat
    </FractulText>
    <Box sx={{ ailgnItem: 'center', display: 'flex' }}>
      <IconButton size="large" sx={{ color: muiTheme.palette.icon.dark }}>
        <PushPinIcon sx={{ transform: 'rotate(0.1turn)' }} />
      </IconButton>
      <IconButton size="large" sx={{ color: muiTheme.palette.icon.dark }}>
        <ZoomOutMapIcon />
      </IconButton>
    </Box>
  </>
)

export default Heading
