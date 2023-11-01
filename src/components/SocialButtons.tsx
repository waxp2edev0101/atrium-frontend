import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Button } from '@mui/material'
import Icon from '@mui/material/Icon'

import LinkIcon from '../assets/icons/link-chain-icon.png'
export const SocialButtons = () => {
  return (
    <Box display="flex" gap="12px">
      <Button className="secondary">
        <img src={LinkIcon} alt="" /> &nbsp; marketplace
      </Button>
      {/* <Button className="secondary">whitepaper</Button> */}
      <Button className="secondary">
        <TwitterIcon sx={{ fontSize: '16px' }} />
        &nbsp; twitter
      </Button>
      <Button className="secondary">
        <Icon sx={{ fontSize: '16px' }}>discord</Icon>
        &nbsp; discord
      </Button>
      <Button className="secondary">
        <img src={LinkIcon} alt="" /> &nbsp; website
      </Button>
    </Box>
  )
}
