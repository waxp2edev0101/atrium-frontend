import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Tabs, Typography, Tab } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { TabPanel, a11yProps, Button } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { setCommunity as setGlobalCommunity } from '../../../stores/CommunityStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { ICommunity } from '../../../types/model'
import { apiPutRequest } from '../../../utils'
import { TabID } from '../ClubBoard'
import * as Container from '../styled'

import { EditContent } from './EditContent'
import { EditIdentity } from './EditIdentity'
import { EditTags } from './EditTags'
import { EditWallet } from './EditWallet'

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

const EditCommunity: React.FC = () => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state) => state.community.data)
  const [value, setValue] = React.useState(0)

  const [community, setCommunity] = useState<ICommunity>(data)

  useEffect(() => {
    // updateProfile()
  }, [])
  useEffect(() => {
    setCommunity(data)
  }, [data])
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
    console.log('Save community: ', community)
    const res = await apiPutRequest(
      `${process.env.VITE_API_URL}/user`,
      community
    )

    // console.log(res)
    if (res.status === 200) {
      dispatch(setGlobalCommunity(community))
    } else {
      console.log('Failed to update user profile')
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleBtnBackToCommunity = () => {
    dispatch(setCurrentBoardTab(TabID.COMMUNITY_HUB))
  }

  return (
    <Container.Main>
      <Box sx={{ padding: '60px 24px' }}>
        <Box p="32px">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h2" color={palette.secondary.light}>
              edit community
            </Typography>
            <Box display="flex" gap="24px">
              <Button
                className="primary active"
                color={palette.text.primary}
                onClick={handleBtnBackToCommunity}
              >
                <Typography variant="h6" color={palette.background.paper}>
                  back to community
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
              data={community}
              setData={setCommunity}
              // updateProfile={updateProfile}
              save={save}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <EditTags data={community} setData={setCommunity} save={save} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <EditIdentity data={community} setData={setCommunity} save={save} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <EditWallet data={community} setData={setCommunity} save={save} />
          </TabPanel>
        </Box>
      </Box>
    </Container.Main>
  )
}

export { EditCommunity }
