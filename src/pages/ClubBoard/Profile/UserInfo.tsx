import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { Box, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'

import MessageIcon from '../../../assets/icons/message-icon-dark.png'
import { AText, Button, SocialButtons } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { getUserById } from '../../../services/authApi'
import type { TSnack } from '../../../stores/AppStore'
import { openSnack } from '../../../stores/AppStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { IUser, IFriend } from '../../../types/model'
import { apiPostRequest } from '../../../utils'
import editIcon from '../images/edit-icon.png'

import { Text } from './styled'

export const UserInfo = ({ user }: { user: IUser }) => {
  const dispatch = useAppDispatch()
  const [isFriend, setIsFriend] = useState(false)
  const [_user, setUser] = useState<IUser>(user)
  const me = useAppSelector((state) => state.auth.user)
  useEffect(() => {
    let isMounted = true
    if (isMounted && _user && _user.friends) {
      _user.friends.forEach((friend: IFriend) => {
        if (friend?._id === me._id) {
          setIsFriend(true)
          return
        }
      })
    }
    return () => {
      isMounted = false
    }
  }, [_user])

  useEffect(() => {
    setUser(user)
  }, [user])

  const handleEdit = () => {
    dispatch(setCurrentBoardTab(4))
  }

  const handleSetFriend = async () => {
    if (isFriend) {
      //remove
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/user/friend`,
        {
          recipient: _user._id,
          status: 4,
        }
      )
      if (res.status === 200) {
        if (res.data?.success) {
          setIsFriend(false)
          setUser((prevUser) => ({
            ...prevUser,
            friends: prevUser?.friends.filter(
              (item: IFriend) => item._id !== me._id
            ),
          }))
        } else {
          console.log('Response status is 200, but not succeed to add friend')
        }
      } else {
        const snack: TSnack = {
          content: res.data?.message || 'Failed to add friend',
          open: true,
          type: 'warning',
        }
        dispatch(openSnack(snack))
      }
    } else {
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/user/friend`,
        {
          recipient: _user._id,
          status: 3,
        }
      )
      if (res.status === 200) {
        if (res.data?.recipient) {
          setIsFriend(true)
          const res = await getUserById(_user._id)
          if (res.status === 200 && res.data) setUser(res.data)
        } else {
        }
      } else {
        const snack: TSnack = {
          content: res.data?.message || 'Failed to add friend',
          open: true,
          type: 'warning',
        }
        dispatch(openSnack(snack))
      }
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item lg={5} position="relative">
        <Box
          position="absolute"
          width="100%"
          textAlign="center"
          bottom="124px"
          pr="16px"
        >
          <img
            src={_user.avatar}
            alt=""
            width="156px"
            height="156px"
            style={{
              border: `1px solid ${palette.primary.main}`,
              borderRadius: '100px',
            }}
          />
        </Box>
        <Box pt={8}>
          <Typography variant="h4" textAlign="center">
            {_user.username}
          </Typography>
          <AText className="disabled" sx={{ textAlign: 'center' }} mt="8px">
            {_user.accountId}
          </AText>
        </Box>
        {me._id !== _user._id && (
          <Box pt="24px" display="flex" justifyContent="center" gap="12px">
            <Box>
              <Button
                className="primary outlined active"
                color={palette.secondary.light}
                onClick={handleSetFriend}
              >
                <PeopleOutlinedIcon />
                {isFriend ? 'remove' : 'add'} friend
              </Button>
            </Box>
            <Box>
              <Button
                className="primary outlined active"
                color={palette.secondary.light}
              >
                <Box pr="4px" width="24px" height="24px">
                  <img src={MessageIcon} alt="" width="100%" height="100%" />
                </Box>
                message
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
      <Grid item lg={7}>
        <Box position="relative">
          <Box pt="64px">
            {/* <Text>cofounder @ASAC_NFT</Text> */}
            <Text maxWidth={554}>{user.bio}</Text>
          </Box>
          <Box pt="36px">
            <SocialButtons />
          </Box>
          <Button
            className="outlined primary active"
            color={palette.text.disabled}
            sx={{
              position: 'absolute',
              right: '24px',
              top: '24px',
              visibility: me._id === _user._id ? 'visible' : 'hidden',
            }}
            onClick={handleEdit}
          >
            <img src={editIcon} alt="" width="24px" height="24px" />
            &nbsp; edit profile
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
