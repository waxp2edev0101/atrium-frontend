import { Box, Typography } from '@mui/material'

// import avatar from '../../../assets/images/avatar-5.png'
import { palette } from '../../../MuiTheme'

export const Message = ({
  sent,
  chatMessage,
  avatar,
}: {
  sent?: boolean
  chatMessage: any
  avatar: string
}) => {
  return (
    <Box
      display="flex"
      flexDirection={`${sent ? 'row-reverse' : 'row'}`}
      my="24px"
      gap="12px"
    >
      <Box>
        <img
          src={avatar}
          alt=""
          width="47px"
          height="47px"
          style={{
            border: `1px solid ${palette.primary.main}`,
            borderRadius: '100%',
          }}
        />
      </Box>
      <Box
        width="80%"
        sx={{
          background: sent ? 'yellow' : palette.background.paper,
          border: !sent ? `1px solid ${palette.border.main}` : ``,
          padding: '24px',
        }}
      >
        <Typography
          sx={{
            color: `${sent ? palette.text.secondary : palette.text.primary}`,
            fontFamily: 'Andale Mono Regular',
            fontSize: '16px',
            fontWeight: '400',
            letterSpacing: '-0.05em',
            lineHeight: '16px',
          }}
        >
          {chatMessage.content}
        </Typography>
      </Box>
    </Box>
  )
}
