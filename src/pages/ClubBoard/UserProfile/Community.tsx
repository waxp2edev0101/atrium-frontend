import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box } from '@mui/material'

import { AtButton, AText } from '../../../components/elements'
import { palette } from '../../../MuiTheme'
import EditIcon from '../images/edit-icon.png'
import LinkIcon from '../images/link-icon-mini.png'

export const Community = () => {
  return (
    <Box position="relative">
      <Box display="flex" justifyContent="center" gap="38px">
        <AtButton
          icon={<ChatOutlinedIcon sx={{ color: 'white', fontSize: '18px' }} />}
          text="message"
          variant="outlined"
        />
        <Box>
          <AText className="subtitle">swiftyyy</AText>
        </Box>
        <AtButton
          icon={<GroupOutlinedIcon sx={{ color: 'white', fontSize: '20px' }} />}
          text="add friend"
          variant="outlined"
        />
      </Box>
      <Box mt="12px">
        <AText className="disabled" sx={{ textAlign: 'center' }}>
          Your #1 Favourite Degen on NEAR.
        </AText>
      </Box>
      <Box
        mt="12px"
        textAlign="center"
        display="flex"
        justifyContent="center"
        gap="18px"
      >
        <AtButton
          variant="outlined"
          text="twitter"
          icon={<TwitterIcon sx={{ color: 'white', fontSize: '20px' }} />}
        />
        <AtButton
          variant="outlined"
          text="website"
          icon={<img src={LinkIcon} alt="" />}
        />
        <AtButton
          variant="outlined"
          text="discord"
          icon={
            <span className="material-icons" style={{ color: 'white' }}>
              discord
            </span>
          }
        />
      </Box>
      <Box position="absolute" sx={{ right: '38px', top: '0px' }}>
        <AtButton
          variant="outlined"
          text={
            <span style={{ color: `${palette.text.disabled}` }}>
              Edit Profile
            </span>
          }
          icon={<img src={EditIcon} alt="" />}
        />
      </Box>
    </Box>
  )
}
