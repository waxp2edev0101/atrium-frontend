import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import type { SxProps } from '@mui/system'
import React from 'react'

import { palette } from '../../../../MuiTheme'

import Card from './Card'

interface Props {
  sx: SxProps
}

const Members: React.FC<Props> = () => {
  return (
    /* eslint-disable-next-line prettier/prettier */
    <Box
      sx={{
        border: `2px solid ${palette.border.dark}`,
        display: 'flex',
        flexDirection: 'column',
        height: 210,
        width: 450,
      }}
    >
      {/* eslint-disable-next-line prettier/prettier */}
      <Text
        variant="h6"
        sx={{
          color: palette.text.primary,
          fontFamily: 'Fractul Alt',
          fontSize: '20px',
          fontWeight: '600',
          padding: '0 10px',
          paddingLeft: '20px',
        }}
      >
        Members
      </Text>
      {/* eslint-disable-next-line prettier/prettier */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          height: 170,
          minHeight: 170,
          overflowX: 'scroll',
          paddingLeft: '20px',
          width: 425,
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  )
}

export default Members
