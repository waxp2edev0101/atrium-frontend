import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import SendIcon from '@mui/icons-material/Send'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import React from 'react'

import { palette } from '../../../../MuiTheme'

import IconBox from './IconBox'

const SendMessage: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexShrink: 0,
          gap: '8px',
        }}
      >
        <IconBox>
          <IconButton size="large">
            <SentimentSatisfiedOutlinedIcon />
          </IconButton>
        </IconBox>
        <IconBox>
          <IconButton
            size="large"
            sx={{ border: '1px lsolid', borderColor: palette.border.dark }}
          >
            <ImageOutlinedIcon />
          </IconButton>
        </IconBox>
      </Box>
      <FormControl fullWidth sx={{ m: 1, mt: 3 }} variant="standard">
        <OutlinedInput
          sx={{ borderRadius: '0px', paddingRight: '20px', width: '100%' }}
          placeholder="Type Here..."
          endAdornment={
            <InputAdornment position="end">
              <SendIcon sx={{ color: palette.icon.dark }} />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  )
}

export default SendMessage
