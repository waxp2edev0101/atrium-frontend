import { Box } from '@mui/material'

import { AText, AtButton } from '../../../components'
import heartIcon from '../images/heart-icon-mini.png'
import media from '../images/media-image.png'
import avatar from '../images/profile-avatar.png'
import refreshIcon from '../images/refresh-icon-mini.png'

import { Container as PContainer } from './styled'

export const Item = () => {
  return (
    <Box>
      <img src={media} alt="" />
      <Box display="flex" gap="4px">
        <img src={avatar} alt="" width="38px" height="38px" />
        <Box p="4px">
          <Box display="flex" justifyContent="space-between">
            <AText sx={{ fontSize: '14px', fontWeight: '600' }}>Hades</AText>
            <Box display="flex" gap="4px">
              <span>
                <img src={heartIcon} alt="" />
              </span>
              <span>
                <img src={refreshIcon} alt="" />
              </span>
            </Box>
          </Box>
          <AText className="disabled" sx={{ fontSize: '10px !important' }}>
            posted 5 minutes ago
          </AText>
        </Box>
      </Box>
    </Box>
  )
}
export const Media = () => {
  return (
    <PContainer>
      <Box display="flex" justifyContent="space-between">
        <AText sx={{ fontSize: '30px', fontWeight: '600' }}>media</AText>
        <Box py="6px">
          <AtButton variant="warning" text="upload" />
        </Box>
      </Box>
      <Box>
        <AText className="disabled">sort by:</AText>
        <Box display="flex" gap="12px">
          <AtButton active text="all" variant="x-small" />
          <AtButton text="favourited" variant="x-small" />
          <AtButton text="shared" variant="x-small" />
        </Box>
      </Box>
      <Box display="flex" py="24px" gap="8px" sx={{ overflowX: 'hidden' }}>
        <Item />
        <Item />
        <Item />
      </Box>
    </PContainer>
  )
}
