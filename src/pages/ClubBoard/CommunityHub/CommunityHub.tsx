import { Box, Grid, Modal, Backdrop, Fade } from '@mui/material'
import { useState, useEffect } from 'react'

import bannerImage from '../../../assets/images/banner-2.png'
import { Banner } from '../../../components'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import type { TAlert, TSnack } from '../../../stores/AppStore'
import { openSnack } from '../../../stores/AppStore'
import { setUser } from '../../../stores/AuthStore'
import type { ICommunity, ICommunityMember, IUser } from '../../../types/model'
import { apiPostRequest, apiGetRequest } from '../../../utils'
import * as PContainer from '../styled'

import { FeaturedPost, Members, MediaPanel, LiveChat, Detail } from './'

export const MembersModal = ({
  open,
  handleOpen,
}: {
  open: boolean
  handleOpen: AnyFunction
}) => {
  const style = {
    bgcolor: palette.grey[300],
    // border: '2px solid #000',
    boxShadow: 24,

    left: '50%',

    position: 'absolute' as const,

    top: '50%',

    transform: 'translate(-50%, -50%)',

    width: '70%',
    // p: 4,
  }
  return (
    <Modal
      open={open}
      onClose={() => handleOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Members isModal={true} handleOpen={handleOpen} />
        </Box>
      </Fade>
    </Modal>
  )
}

export const CommunityHub = () => {
  const [joined, setJoined] = useState(false)
  const [openMembersModal, setOpenMembersModal] = useState(false)

  const dispatch = useAppDispatch()
  const community = useAppSelector((state) => state.community.data)
  const user = useAppSelector((state) => state.auth.user)

  useEffect(() => {
    console.log('user changed: ', user)
  }, [user])
  useEffect(() => {
    console.log('current community is : ', community, 'user: ', user)
    if (user.joinedCommunities.length === 0) {
      console.log('no joined community')
      setJoined(false)
      return
    }
    console.log(community._id, user.joinedCommunities)
    user.joinedCommunities.forEach((cm: ICommunityMember | string) => {
      if (typeof cm === 'string') {
        if (cm === community._id) {
          console.log('you are connected')
          setJoined(true)
          return
        } else {
          setJoined(false)
        }
      } else {
        if (
          ((cm as ICommunityMember).community as ICommunity)._id ===
          community._id
        ) {
          console.log('you are connected')
          setJoined(true)
          return
        } else {
          setJoined(false)
        }
      }
    })
    console.log('end of loop')
    // const ownerId = community.owner
  }, [community, user])
  const handleJoin = async () => {
    if (!joined) {
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/communities/join`,
        {
          community: community._id,
        }
      )
      console.log('join community api response: ', res)
      if (res.status === 200) {
        if (res?.data?.community) {
          // console.log('you are joined')
          handleSnack('success', 'You are successfully joined')
          const res = await apiGetRequest(`${process.env.VITE_API_URL}/auth/me`)
          console.log(res.data)
          dispatch(setUser(res.data as IUser))
          setJoined(true)
        }
      } else {
        console.log('Bad Request 400')
        // alert(res?.data?.msg)
        handleSnack('error', res.data?.msg)
      }
    } else {
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/communities/join`,
        {
          community: community._id,
          leave: true,
        }
      )
      if (res?.status === 200) {
        setJoined(false)
        dispatch(
          setUser({
            ...user,
            joinedCommunities: (
              user.joinedCommunities as ICommunityMember[]
            ).filter(
              (item: ICommunityMember) =>
                (item.community as ICommunity)._id !== community._id
            ),
          })
        )
      }
    }
  }
  const handleSnack = (type: TAlert, content: string) => {
    const snack: TSnack = { content, open: true, type }
    dispatch(openSnack(snack))
  }
  return (
    <PContainer.Main>
      <Box>
        <Banner img={bannerImage} />
      </Box>
      <Box>
        <Detail handleJoin={handleJoin} joined={joined} community={community} />
      </Box>
      <Grid container p="72px 24px" spacing={`24px`}>
        <Grid item lg={6}>
          <FeaturedPost />
        </Grid>
        <Grid item lg={6}>
          <LiveChat community={community} />
        </Grid>
        <Grid item lg={6}>
          <MediaPanel />
        </Grid>
        <Grid item lg={6} sx={{ width: '100%' }}>
          <Members isModal={false} handleOpen={setOpenMembersModal} />
        </Grid>
      </Grid>
      <MembersModal open={openMembersModal} handleOpen={setOpenMembersModal} />
    </PContainer.Main>
  )
}
