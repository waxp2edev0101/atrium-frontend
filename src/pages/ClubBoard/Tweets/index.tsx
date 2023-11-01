import Box from '@mui/material/Box'
// import Text from '@mui/material/Typography'
import React from 'react'

import { FractulAltText } from '../../../components/Styled'
import { palette } from '../../../MuiTheme'

import Stream from './Stream/index'

const Index: React.FC = () => {
  return (
    <Box /* eslint-disable-next-line prettier/prettier */
      sx={{ backgroundColor: palette.widget.background, border: `2px solid ${palette.border.dark}`, display: 'flex',flexDirection: 'column', gap: '10px', height: 670, marginLeft: '10px', paddingLeft: '35px', paddingTop: '20px', width: 595 }}>
      <FractulAltText variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
        Tweets
      </FractulAltText>
      <Stream />
    </Box>
  )
}

export default Index
