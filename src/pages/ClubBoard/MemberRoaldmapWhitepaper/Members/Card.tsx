import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import React from 'react'

import { DisabledText } from '../../../../components/Styled'
import muiTheme from '../../../../MuiTheme'

import memberImg from './images/member1.png'

const Card: React.FC = () => {
  return (
    /* eslint-disable-next-line prettier/prettier */
    <Box sx={{border: '2px solid', borderColor: muiTheme.palette.border.dark, display: 'flex', flexDirection: 'row',height: 80, width: 270 }}>
      <img width={78} height={80} src={memberImg} />
      <Box sx={{ height: 80, width: 200 }}>
        <Text
          variant="h6"
          sx={{
            color: muiTheme.palette.text.primary,
            fontFamily: 'Fractul Alt',
            fontSize: '20px',
            fontWeight: 'bold',
            // lineHeight: '20px',
            padding: '4px 10px',
            textTransform: 'Capitalize',
          }}
        >
          SnowStorm
        </Text>
        <Box sx={{ display: 'flex', gap: '8px', padding: '2px 10px' }}>
          <Box
            sx={{
              background: muiTheme.palette.colors?.yellow,
              borderRadius: '6px',
              height: '12px',
              margin: '3px 0px',
              width: '12px',
            }}
          />
          <DisabledText sx={{ fontSize: '12px' }}>online</DisabledText>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
