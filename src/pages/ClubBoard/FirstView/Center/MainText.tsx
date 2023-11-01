import VerifiedIcon from '@mui/icons-material/Verified'
import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import React from 'react'

import muiTheme from '../../../../MuiTheme'

interface Props {
  text: string
}

const MainText: React.FC<Props> = ({ text }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
      <Text
        align="center"
        variant="h2"
        sx={{
          color: muiTheme.palette.text.primary,
          fontFamily: 'Fractul',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: 800,
        }}
      >
        {text}
      </Text>
      <Box sx={{ padding: '4px' }}>
        <VerifiedIcon
          sx={{ color: muiTheme.palette.colors?.yellow, fontSize: '40px' }}
        />
      </Box>
    </Box>
  )
}

export default MainText
