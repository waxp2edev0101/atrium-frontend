import StorefrontIcon from '@mui/icons-material/Storefront'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

import { palette } from '../../../MuiTheme'

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m22 24l-5.25-5l.63 2H4.5A2.5 2.5 0 0 1 2 18.5v-15A2.5 2.5 0 0 1 4.5 1h15A2.5 2.5 0 0 1 22 3.5V24M12 6.8c-2.68 0-4.56 1.15-4.56 1.15c1.03-.92 2.83-1.45 2.83-1.45l-.17-.17c-1.69.03-3.22 1.2-3.22 1.2c-1.72 3.59-1.61 6.69-1.61 6.69c1.4 1.81 3.48 1.68 3.48 1.68l.71-.9c-1.25-.27-2.04-1.38-2.04-1.38S9.3 14.9 12 14.9s4.58-1.28 4.58-1.28s-.79 1.11-2.04 1.38l.71.9s2.08.13 3.48-1.68c0 0 .11-3.1-1.61-6.69c0 0-1.53-1.17-3.22-1.2l-.17.17s1.8.53 2.83 1.45c0 0-1.88-1.15-4.56-1.15m-2.07 3.79c.65 0 1.18.57 1.17 1.27c0 .69-.52 1.27-1.17 1.27c-.64 0-1.16-.58-1.16-1.27c0-.7.51-1.27 1.16-1.27m4.17 0c.65 0 1.17.57 1.17 1.27c0 .69-.52 1.27-1.17 1.27c-.64 0-1.16-.58-1.16-1.27c0-.7.51-1.27 1.16-1.27Z"
    />
  </svg>
)

interface Props {
  icon: React.ReactNode
  children: React.ReactNode
}

const SNSButton: React.FC<Props> = ({ icon, children }) => (
  <Button
    variant="outlined"
    sx={{
      borderColor: palette.border.dark,
      color: palette.text.primary,
      fontFamily: 'Fractul',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '800',
      lineHeight: '19px',
      textTransform: 'capitalize',
    }}
    startIcon={icon}
  >
    {children}
  </Button>
)

const SNSButtonGroup = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginTop: '10px',
      }}
    >
      <SNSButton icon={<TwitterIcon />}>Twitter</SNSButton>
      <SNSButton icon={<StorefrontIcon />}>Market</SNSButton>
      <SNSButton icon={<DiscordIcon />}>Discord</SNSButton>
    </Box>
  )
}

export default SNSButtonGroup
