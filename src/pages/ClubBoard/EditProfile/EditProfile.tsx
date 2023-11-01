import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Tabs, Typography, Tab } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { TabPanel, a11yProps, Button } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { openSnack } from '../../../stores/AppStore'
import { setUser } from '../../../stores/AuthStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { IUser } from '../../../types/model'
import { apiPutRequest } from '../../../utils'
import * as Container from '../styled'

import { EditContent, EditWallet, EditIdentity, EditTags } from './'

const tabItems = ['content', 'tags', 'identity', 'wallet & privacy']

const tabStyle = {
  alignItems: 'flex-start',
  color: palette.text.disabled,
  fontFamily: 'Fractul Alt',
  fontSize: '24px',
  fontWeight: 400,
  justifyContent: 'flex-start',

  lineHeight: '32px',
  // padding: '12px 12px 12px 0px',
  textTransform: 'capitalize',
}

const EditProfile: React.FC = () => {
  const dispatch = useAppDispatch()

  const me: IUser = useAppSelector((state) => state.auth.user)
  const [value, setValue] = React.useState(0)

  const [profile, setProfile] = useState<IUser>(me)

  useEffect(() => {
    // updateProfile()
  }, [])
  useEffect(() => {
    setProfile(me)
  }, [me])
  // const updateProfile = <T,>(name: string, value: T) => {
  //   // const keyArray = Object.keys(me)
  //   // type TUserKey = typeof keyArray[number]
  //   // const t: TUserkey = {} as TUserKey
  //   // console.log(t)
  //   setProfile({ ...profile, [name]: value })
  // }
  // function updateProfile<T>(name: string, value: T) {

  // }
  const save = async () => {
    console.log('Save profile: ', profile)
    const isOwner = profile._id === me._id

    if (isOwner) {
      const res = await apiPutRequest(
        `${process.env.VITE_API_URL}/user`,
        profile
      )

      // console.log(res)
      if (res.status === 200) {
        dispatch(setUser(profile))
      } else {
        console.log('Failed to update user profile')
      }
    } else {
      dispatch(
        openSnack({
          content: 'This is not your profile.',
          open: true,
          type: 'warning',
        })
      )
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleBtnBackToProfile = () => {
    dispatch(setCurrentBoardTab(3))
  }

  return (
    <Container.Main>
      <Box sx={{ padding: '60px 24px' }}>
        <Box p="32px">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h2" color={palette.secondary.light}>
              edit profile
            </Typography>
            <Box display="flex" gap="24px">
              <Button
                className="primary active"
                color={palette.text.primary}
                onClick={handleBtnBackToProfile}
              >
                <Typography variant="h6" color={palette.background.paper}>
                  back to profile
                </Typography>

                <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </Button>
              <Button
                className="primary active"
                color={palette.secondary.light}
                onClick={save}
              >
                save changes
              </Button>
            </Box>
          </Box>
          <Box sx={{ borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabItems.map((item: string, key: number) => (
                <Tab
                  label={item}
                  {...a11yProps(key)}
                  key={key}
                  sx={{
                    ...tabStyle,
                    paddingLeft: key === 0 ? '0px' : '16px',
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
        <Box
          sx={{
            border: `1px solid ${palette.text.primary}`,
            padding: '32px',
            width: '100%',
          }}
        >
          <TabPanel value={value} index={0}>
            <EditContent
              profile={profile}
              setProfile={setProfile}
              // updateProfile={updateProfile}
              save={save}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <EditTags profile={profile} setProfile={setProfile} save={save} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <EditIdentity
              profile={profile}
              setProfile={setProfile}
              save={save}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <EditWallet profile={profile} setProfile={setProfile} save={save} />
          </TabPanel>
        </Box>
      </Box>
    </Container.Main>
  )
}

export { EditProfile }
