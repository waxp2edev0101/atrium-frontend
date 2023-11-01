import { Box, Typography } from '@mui/material'

import project6 from '../../../assets/images/project-6.png'
import { Button } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { setCommunity } from '../../../stores/CommunityStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { ICommunity, ICommunityMember } from '../../../types/model'
import { convertString2LongDate } from '../../../utils'
// import { setCommunityId } from '../../../stores/AppStore'
import { TabID } from '../ClubBoard'

export const CommunityPanel = ({ member }: { member: ICommunityMember }) => {
  const community: ICommunity = member.community as ICommunity
  const dispatch = useAppDispatch()

  const handleCommunityHub = (community: ICommunity) => {
    dispatch(setCommunity(community))
    dispatch(setCurrentBoardTab(TabID.COMMUNITY_HUB))
  }
  return (
    <Box display="flex" gap="24px" position="relative">
      <Box width="250px !important" height="250px">
        <img src={project6} alt="" width="100%" height="100%" />
      </Box>
      <Box py="24px" flex="1">
        <Typography variant="h2">{community.name}</Typography>
        <Box mt="40px">
          <Button
            className="primary outlined active"
            color={palette.secondary.light}
            onClick={() => handleCommunityHub(community)}
          >
            view community hub
          </Button>
        </Box>
        <Box mt="20px" display="flex" flexDirection="column" gap="8px">
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              roles
            </Typography>
            <Box flex="3">
              <Box>
                <Button
                  className="primary active tag tag-small"
                  color="#FF75CD"
                >
                  whitelisted
                </Button>
              </Box>
            </Box>
          </Box>
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              NFT Owned
            </Typography>
            <Typography variant="h4" flex="3">
              0
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              joined
            </Typography>
            <Typography variant="h4" flex="3">
              {/* august, 2nd 2022 */}
              {convertString2LongDate(member.createdAt)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', right: '0px', top: '0px' }}>
        <Button className="outlined primary" color={palette.secondary.light}>
          view all
        </Button>
      </Box>
    </Box>
  )
}
