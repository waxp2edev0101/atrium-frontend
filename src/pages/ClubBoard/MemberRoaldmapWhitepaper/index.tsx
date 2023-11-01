import Box from '@mui/material/Box'
import React from 'react'

import { palette } from '../../../MuiTheme'

import Members from './Members'
import Roadmap from './Roadmap'
import Whitepaper from './Whitepaper'

const MemberRoaldmapWhitepaper: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: '10px', height: 210, width: 890 }}>
      {/* eslint-disable-next-line prettier/prettier */}
      <Members sx={{ border: `2px solid ${palette.border.dark}`, display: 'flex', flexDirection: 'column', height: 210, width: 450, }}/>
      <Roadmap />
      <Whitepaper />
    </Box>
  )
}

export default MemberRoaldmapWhitepaper
