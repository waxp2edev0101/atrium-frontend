import Box from '@mui/material/Box'
import React from 'react'

import BGText from './BGText'
import Center from './Center'
import IconDisplay from './IconDisplay'
import SNSButtonGroup from './SNSButtonGroup'

const FirstView = () => {
  return (
    <>
      <Box sx={{ background: 'black' }}>
        <BGText />
        <IconDisplay />
      </Box>
      <Center />
      <SNSButtonGroup />
    </>
  )
}

export default FirstView
