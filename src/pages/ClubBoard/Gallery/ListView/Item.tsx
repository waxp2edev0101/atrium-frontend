import { Box } from '@mui/material'
import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../../MuiTheme'

import Img from './item.png'

const Item = () => {
  /* eslint-disable-next-line prettier/prettier */
  return (<Box sx={{ height: 181, width: 130}}>
      <img src={Img} width={130} height={130} />
      <Box sx={{ height: 51, position: 'relative', top: '-5px', width: 130 }}>
        <Text
          variant="body1"
          align="center"
          sx={{
            color: palette.grey[600],

            fontWeight: 'bold',
            position: 'relative',
            top: '5px',
          }}
        >
          ASAC
        </Text>
        <Text
          variant="h5"
          align="center"
          sx={{ color: '#fff', fontWeight: 'bold', paddingBottom: '5px' }}
        >
          #324
        </Text>
      </Box>
    </Box>
  )
}

export default Item
