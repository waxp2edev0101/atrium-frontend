import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import { Box, Grid, Typography, styled } from '@mui/material'

import badge from '../../../assets/icons/verified-icon-small.png'
import avatar1 from '../../../assets/images/avatar-7.png'
import { AText, Button, SocialButtons } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { openSnack } from '../../../stores/AppStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { ICommunity, IUser } from '../../../types/model'
import { TabID } from '../ClubBoard'
import editIcon from '../images/edit-icon.png'

import { DetailContent } from './'

export const Detail = ({
  community,
  handleJoin,
  joined,
}: {
  community: ICommunity
  handleJoin: AnyFunction
  joined: boolean
}) => {
  const dispatch = useAppDispatch()
  const me = useAppSelector((state) => state.auth.user)

  const Text = styled(Typography)(() => ({
    color: `${palette.text.primary}`,
    fontFamily: 'Andale Mono Regular',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '-0.05em',
    lineHeight: '120%',
  }))

  const handleEdit = () => {
    const ownerId =
      typeof community.owner === 'string'
        ? community.owner
        : community.owner?._id
    if (ownerId === me._id) {
      dispatch(setCurrentBoardTab(TabID.EDIT_COMMUNITY))
    } else {
      dispatch(
        openSnack({
          content: "You can't edit this community since you are not owner.",
          open: true,
          type: 'warning',
        })
      )
    }
  }
  return (
    <Grid container spacing={2}>
      <Grid item lg={5} position="relative">
        <Box
          position="absolute"
          width="100%"
          textAlign="center"
          bottom="160px"
          pr="16px"
        >
          <img
            src={avatar1}
            alt=""
            width="156px"
            height="156px"
            style={{
              border: `1px solid ${palette.primary.main}`,
              borderRadius: '100px',
            }}
          />
        </Box>
        <Box pt="48px">
          <Box display="flex" justifyContent="center" gap={`8px`}>
            <Typography variant="h4" textAlign="center">
              {community.name}
            </Typography>
            <Box py="6px">
              <img src={badge} alt="" />
            </Box>
          </Box>
          <AText className="disabled" sx={{ textAlign: 'center' }}>
            {(community.owner as IUser).accountId}
          </AText>
        </Box>
        <Box pt="32px" textAlign="center">
          <Button
            // className={`community primary outlined active`}
            className={`community primary outlined ${joined ? '' : 'active'}`}
            color={joined ? palette.text.primary : palette.secondary.light}
            onClick={handleJoin}
          >
            <GroupOutlinedIcon />
            {joined ? 'remove' : 'join'} community
          </Button>
        </Box>
      </Grid>
      <Grid item lg={7}>
        <Box pt="24px" position="relative">
          <Box>
            <DetailContent />
          </Box>
          <Box pt="15px">
            <Text>{community.description}</Text>
          </Box>
          <Box pt="15px">
            <SocialButtons />
          </Box>
          <Button
            className="outlined primary active"
            color={palette.text.disabled}
            sx={{ position: 'absolute', right: '24px', top: '24px' }}
            onClick={handleEdit}
          >
            <img src={editIcon} alt="" width="24px" height="24px" />
            &nbsp; edit community
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
