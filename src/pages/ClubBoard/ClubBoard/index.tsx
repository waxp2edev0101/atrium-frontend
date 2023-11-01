import Box from '@mui/material/Box'
import React from 'react'

import {
  EditProfile,
  Profile,
  CommunityHub,
  Dashboard,
  // Account,
  ArticleBuilder,
  FeedbackForm,
  UserProfile,
  Chat,
  Post,
  SinglePost,
  SearchUI,
  EditCommunity,
} from '..'
import { TabPanel } from '../../../components'
import { useAppSelector } from '../../../hooks'
import '../reset.css'
import SearchAppBar from '../SearchAppBar'
import * as Container from '../styled'

export enum TabID {
  DASHBOARD,
  POST,
  CHAT,
  PROFILE,
  EDIT_PROFILE,
  COMMUNITY_HUB,
  SINGLE_POST,
  USER_PROFILE,
  ARTICLE_BUILDER,
  FEEDBACK_FORM,
  EDIT_COMMUNITY,
}

export const ClubBoard: React.FC = () => {
  const value = useAppSelector((state) => state.ui.currentBoardTab) || 0
  const searchUiOpen = useAppSelector((state) => state.ui.searchUiOpen)
  return (
    <Container.Root>
      <div>
        <SearchAppBar />
      </div>
      <Box>
        <Box position="relative">
          <TabPanel value={value} index={0}>
            <Dashboard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Post />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Chat />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <EditProfile />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <CommunityHub />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <SinglePost />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <UserProfile />
          </TabPanel>
          <TabPanel value={value} index={8}>
            <ArticleBuilder />
          </TabPanel>
          <TabPanel value={value} index={9}>
            <FeedbackForm />
          </TabPanel>
          <TabPanel value={value} index={TabID.EDIT_COMMUNITY}>
            <EditCommunity />
          </TabPanel>
          <Box
            sx={{
              display: searchUiOpen ? 'block' : 'none',
              height: '100%',
              paddingLeft: '80px',
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: 1,
            }}
          >
            <SearchUI open={searchUiOpen} />
          </Box>
        </Box>
      </Box>
    </Container.Root>
  )
}
