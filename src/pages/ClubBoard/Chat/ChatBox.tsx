import AttachFileIcon from '@mui/icons-material/AttachFile'
import ImageIcon from '@mui/icons-material/Image'
import SendIcon from '@mui/icons-material/Send'
import { Box } from '@mui/material'
import React, { useState } from 'react'

import colyseusGame from '../../../ColyseusGame'
import { AdornmentInput } from '../../../components'
import { useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import type Game from '../../../scenes/Game'

import { Message } from './Message'

export const ChatBox = ({
  opponentInfo,
  selfInfo,
}: {
  opponentInfo: any
  selfInfo: any
}) => {
  const friendChatMessages = useAppSelector(
    (state) => state.chat.friendChatMessages
  )
  const [value, setValue] = useState('')
  const game = colyseusGame.game as Game

  const handleSubmit = () => {
    if (value) {
      game.network.addDirectChatMessage(selfInfo, opponentInfo, value)
    }
    setValue('')
  }

  return (
    <>
      <Box height="720px" sx={{ overflowY: 'scroll' }} p="24px">
        {friendChatMessages.map(({ chatMessage }, index) => (
          <Message
            key={index}
            sent={selfInfo.username !== chatMessage.username}
            chatMessage={chatMessage}
            avatar={
              opponentInfo.username == chatMessage.username
                ? opponentInfo.avatar
                : selfInfo.avatar
            }
          />
        ))}
      </Box>
      <Box display="flex" gap="12px">
        <Box
          sx={{
            border: `1px solid ${palette.border.main}`,
            padding: '13px',
          }}
        >
          <ImageIcon sx={{ color: 'white' }} />
        </Box>
        <Box
          sx={{
            border: `1px solid ${palette.border.main}`,
            padding: '13px',
          }}
        >
          <AttachFileIcon sx={{ color: 'white' }} />
        </Box>
        <AdornmentInput
          variant="default"
          label="type here..."
          adornment={<SendIcon />}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          onClick={handleSubmit}
          onSend={handleSubmit}
        />
      </Box>
    </>
  )
}
