import { Box, styled, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'

import loadingGif from '../../../assets/icons/search-loading.gif'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import {
  setProfile,
  setSearchUserCriteria,
  setCurrentUserId,
} from '../../../stores/AppStore'
import { setCommunity } from '../../../stores/CommunityStore'
import { setCurrentBoardTab, setSearchUiOpen } from '../../../stores/UiStore'
import type { ICommunity, IUser } from '../../../types/model'
import { apiGetRequest } from '../../../utils'

const SearchUIWrapper = styled(Box)(() => ({
  '&.open': {
    opacity: 1,
  },
  backdropFilter: 'blur(15px)',
  background: 'rgba(20, 20, 20, 0.7)',
  height: '100%',
  opacity: 0,
  padding: '36px',
  transition: 'opacity 0.5s',
  width: '100%',
}))

const ItemWrapper = styled(Box)(({ theme }) => ({
  '&:hover': {
    // background: theme.palette.background.default,
    background: theme.palette.grey[300],
    // '& .MuiTypography-root ': {
    //   color: theme.palette.background.paper,
    // }
  },
  background: theme.palette.background.paper,
  display: 'flex',
  padding: '12px',
  transition: 'background 0.3s',
}))
const UserResultItem = ({ user }: { user: IUser }) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setSearchUiOpen(false))
    dispatch(setCurrentBoardTab(3))
    dispatch(setProfile(user))
    dispatch(setSearchUserCriteria(''))
    dispatch(setCurrentUserId(user._id))
  }
  return (
    <ItemWrapper onClick={handleClick}>
      <Box
        width={`76px`}
        height={`76px`}
        sx={{ '& img': { borderRadius: '100%' } }}
      >
        <img src={user.avatar} alt="" width="100%" height="100%" />
      </Box>
      <Box p="26px 12px">
        <Typography variant="h5">{user.username}</Typography>
      </Box>
    </ItemWrapper>
  )
}
const CommunityResultItem = ({ item }: { item: ICommunity }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(setSearchUiOpen(false))
    dispatch(setCurrentBoardTab(5))
    dispatch(setCommunity(item))
    dispatch(setSearchUserCriteria(''))
  }
  return (
    <ItemWrapper flexDirection="column" gap="8px" onClick={handleClick}>
      <Typography variant="h5">{item?.name}</Typography>
      <Typography variant="body2">{item?.description}</Typography>
      <Typography variant="caption">
        {(item?.owner as IUser).accountId}
      </Typography>
    </ItemWrapper>
  )
}
const LoadingItem = () => {
  return (
    <Box>
      <img src={loadingGif} alt="" width="100%" />
    </Box>
  )
}

export const SearchUI = ({ open }: { open: boolean }) => {
  const [users, setUsers] = useState<IUser[]>([])
  const [communities, setCommunities] = useState<ICommunity[]>([])
  const [loading, setLoading] = useState(false)

  const value = useAppSelector((state) => state.app.searchUserCriteria)

  useEffect(() => {
    const search = async () => {
      setLoading(true)
      const res = await apiGetRequest(
        `${process.env.VITE_API_URL}/search?user=${value}&community=${value}`
      )
      if (res.data.users && res.data.users.length) setUsers(res.data.users)
      else setUsers([])
      if (res.data.communities && res.data.communities.length)
        setCommunities(res.data.communities)
      else setCommunities([])
      setLoading(false)
    }
    search()
  }, [value])
  return (
    <SearchUIWrapper className={open ? 'open' : ''}>
      <Box>
        <Box px="24px">
          <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
            user profiles
          </Typography>
        </Box>

        <Box minHeight={`150px`}>
          <Grid container>
            {loading
              ? new Array(6).fill(2).map((_, key: number) => (
                  <Grid item lg={4} key={key} p="24px">
                    <LoadingItem />
                  </Grid>
                ))
              : users.map((item: IUser, key: number) => (
                  <Grid item lg={4} key={key} p="24px">
                    <UserResultItem user={item} />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box px="24px">
          <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
            project profiles
          </Typography>
        </Box>

        <Box minHeight={`150px`}>
          <Grid container>
            {loading
              ? new Array(6).fill(2).map((_, key: number) => (
                  <Grid item lg={4} key={key} p="24px">
                    <LoadingItem />
                  </Grid>
                ))
              : communities.map((item: ICommunity, key: number) => (
                  <Grid item lg={4} key={key} p="24px">
                    <CommunityResultItem item={item} />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Box>
    </SearchUIWrapper>
  )
}
