import LaunchIcon from '@mui/icons-material/Launch'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import SearchIcon from '@mui/icons-material/Search'
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined'
import { Box, Button, Typography, ButtonGroup } from '@mui/material'

// import avatar from '../../../assets/images/avatar-5.png'
import { AText, AdornmentInput } from '../../../components'
import { palette } from '../../../MuiTheme'
import { OfflineIcon, OnlineIcon } from '../UserProfile/styled'

import { AntSwitch } from './AntSwitch'
import type { UserProps } from './Chat'

export const ContactInfo = ({ info }: { info: UserProps }) => {
  return (
    <>
      <AdornmentInput
        variant="default"
        label="search conversation..."
        adornment={<SearchIcon />}
      />
      <Box
        sx={{
          border: `1px solid ${palette.border.main}`,
          mt: '24px',
          padding: '18px',
        }}
      >
        <Box display="flex" justifyContent="center">
          <Box position="relative">
            <img
              src={info.avatar}
              alt=""
              style={{
                borderRadius: '100%',
                height: '100px',
                width: '100px',
              }}
            />
            {info.status === 'online' ? (
              <OnlineIcon
                sx={{
                  border: `1px solid ${palette.border.dark}`,
                  height: '15px',
                  position: 'absolute',
                  right: '3px',
                  top: '12px',
                  width: '15px',
                }}
              />
            ) : (
              <OfflineIcon
                sx={{
                  border: `1px solid ${palette.border.dark}`,
                  height: '15px',
                  position: 'absolute',
                  right: '3px',
                  top: '12px',
                  width: '15px',
                }}
              />
            )}
          </Box>
        </Box>
        <Box p="6px 0px">
          <Box display="flex" justifyContent="center">
            <AText
              sx={{
                fontSize: '24px',
              }}
            >
              {info.username}
            </AText>
            <Box p="6px 5px">
              <LaunchIcon
                sx={{ color: palette.text.primary, fontSize: '18px' }}
              />
            </Box>
          </Box>
          <Typography
            sx={{
              color: `${palette.text.disabled}`,
              fontFamily: 'Andale Mono Regular',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            {info.accountId}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p="6px 0px">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              sx={{
                border: `1px solid ${palette.border.main}`,
                borderRadius: '0px',
                padding: '12px 36px',
              }}
            >
              <LocalPhoneOutlinedIcon sx={{ color: 'yellow' }} />
            </Button>
            <Button
              sx={{
                border: `1px solid ${palette.border.main}`,
                borderRadius: '0px',
                padding: '12px 36px',
              }}
            >
              <VideoCameraFrontOutlinedIcon sx={{ color: 'yellow' }} />
            </Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Box display="flex" p="12px">
            <Box p="4px">
              <AntSwitch />
            </Box>
            <Typography
              sx={{
                color: `${palette.text.primary}`,
                fontFamily: 'Andale Mono Regular',
                textTransform: 'capitalize',
              }}
            >
              notifications
            </Typography>
          </Box>
          <Box display="flex" p="0px 12px">
            <Box p="4px">
              <AntSwitch />
            </Box>
            <Typography
              sx={{
                color: `${palette.text.primary}`,
                fontFamily: 'Andale Mono Regular',
                textTransform: 'capitalize',
              }}
            >
              allow calls
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
