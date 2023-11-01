import Box from '@mui/material/Box'
import React from 'react'

// import EditButton from './EditButton'
import MainText from './MainText'
import SubText from './SubText'

const Center = () => {
  const mainText = 'Antisocial Ape Club'
  const subText =
    'A collection of 3333 pixel art age NFTs stored on NEAR blockchain.'
  return (
    <Box
      sx={{
        display: 'flex',
        height: 110,
        justifyContent: 'center',
        marginTop: '30px',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <MainText text={mainText} />
        <SubText text={subText} />
      </Box>
      {/* <Box
        sx={{
          left: '300px',
          position: 'relative',
        }}
      >
        <EditButton />
      </Box> */}
    </Box>
  )
}

export default Center
