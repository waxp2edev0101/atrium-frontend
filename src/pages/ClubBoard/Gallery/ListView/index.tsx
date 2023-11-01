import Box from '@mui/material/Box'
import React from 'react'

import Item from './Item'

const ListView = () => {
  /* eslint-disable-next-line prettier/prettier */
  return (<Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '8px', height: 375, overflowY: 'scroll', width: 537}}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  )
}

export default ListView
