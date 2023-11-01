import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import banner from '../../../assets/images/banner-3.png'
import { Banner } from '../../../components'
import { useAppSelector } from '../../../hooks'
import type { IUser, IFile } from '../../../types/model'
import { apiGetRequest } from '../../../utils'
import {
  FeaturedPost,
  Members,
  MembersModal,
  MediaPanel,
} from '../CommunityHub'
import { Main as Container } from '../styled'

import { CommunityCarousel } from './CommunityCarousel'
import { Tags } from './Tags'
import { UserInfo } from './UserInfo'

const apiUrl = process.env.VITE_API_URL || 'http://localhost:2567'

export const Profile = () => {
  const [openMembersModal, setOpenMembersModal] = useState(false)
  const [user, setUser] = useState<IUser>({} as IUser)
  const limit = 10
  const skip = 0
  const [medias, setMedias] = useState<IFile[]>([])

  const currentUserId = useAppSelector((state) => state.app.currentUserId)

  useEffect(() => {
    let isMounted = true

    const getUserData = async () => {
      await apiGetRequest(`${apiUrl}/user/${currentUserId}`)
        .then((res: any) => {
          if (res.status === 200 && res.data) {
            if (isMounted) setUser(res.data)
            else console.log('not mounted')
          } else {
            console.log(
              'something went wrong while load user data for user id: ',
              currentUserId
            )
          }
        })
        .catch((error) => {
          console.log('error occurred: ', error)
        })
    }
    getUserData()

    if (isMounted) {
      getMediaData()
    }
    return () => {
      isMounted = false
      // abortController.abort()
    }
  }, [currentUserId])
  const getMediaData = async () => {
    if (currentUserId) {
      const res = await apiGetRequest(
        `${apiUrl}/file?limit=${limit}&skip=${skip}`
      )
      if (res.status === 200 && res.data) {
        setMedias(res.data)
      } else {
        console.log('Failed to load media data')
      }
    }
  }
  // return <>a;ldjf;lsdjflad</>
  return (
    <Container>
      {user ? (
        // <>user is set</>
        <>
          <Box>
            <Banner img={banner} />
          </Box>
          <Box>
            <UserInfo user={user} />
          </Box>
          <Box p="72px 24px">
            <Grid container spacing="24px">
              <Grid item lg={6}>
                <FeaturedPost
                  height="380px"
                  data={
                    user.featuredPost && user.featuredPost.length
                      ? user.featuredPost[0]
                      : null
                  }
                />
              </Grid>
              <Grid item lg={6}>
                <Box height="100%">
                  <CommunityCarousel members={user.joinedCommunities} />
                  <Tags data={user.tags} />
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Members
                  isModal={false}
                  handleOpen={setOpenMembersModal}
                  // users={user.friends}
                />
              </Grid>
              <Grid item lg={6}>
                <MediaPanel data={medias} />
              </Grid>
            </Grid>
          </Box>
          <MembersModal
            open={openMembersModal}
            handleOpen={setOpenMembersModal}
          />
        </>
      ) : (
        <Box p="24px" display="flex" justifyContent="center">
          <Typography variant="h5">Loading</Typography>
        </Box>
      )}
    </Container>
  )
}
