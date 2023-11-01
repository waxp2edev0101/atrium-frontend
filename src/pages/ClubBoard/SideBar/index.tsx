import { Box } from '@mui/material'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React from 'react'

import FrameIcon from '../../../assets/icons/frame-icon.png'
import HomeIcon from '../../../assets/icons/home-icon.png'
import MessageIcon from '../../../assets/icons/message-icon.png'
import ProposalIcon from '../../../assets/icons/proposal-icon.png'
import SettingIcon from '../../../assets/icons/setting-icon.png'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import muiTheme from '../../../MuiTheme'
import { setProfile, setCurrentUserId } from '../../../stores/AppStore'

const IconLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ color: muiTheme.palette.icon.dark, p: '12px 8px' }}>
      {children}
    </Box>
  )
}
const SideBar: React.FC<{
  value: number
  handleChange: AnyFunction
}> = ({ value, handleChange }) => {
  const dispatch = useAppDispatch()
  const me = useAppSelector((state) => state.auth.user)

  const handleSetProfile = () => {
    dispatch(setProfile(me))
    dispatch(setCurrentUserId(me._id))
  }
  return (
    <Box
      sx={{
        '& .MuiTab-root': {
          minWidth: '80px !important',
        },
        alignItems: 'center',

        backgroundColor: muiTheme.palette.grey[300],
        // border: '2px solid',
        borderColor: muiTheme.palette.border.dark,
        display: 'flex',
        flexDirection: 'column',
        gap: muiTheme.spacing(3),
        height: '100%',
        left: 0,
        paddingTop: '30px',
        position: 'absolute',
        top: '136px',
        width: '80px',
        xIndex: muiTheme.zIndex.drawer,
        zIndex: 1,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs side"
        orientation="vertical"
      >
        <Tab
          id={`simple-tab-0`}
          aria-controls={`simple-tabpanel-0`}
          label={
            <IconLink>
              <img src={HomeIcon} alt="" width="100%" height="100%" />
            </IconLink>
          }
        />
        <Tab
          id={`simple-tab-1`}
          aria-controls={`simple-tabpanel-1`}
          label={
            <IconLink>
              <img src={FrameIcon} alt="" width="100%" height="100%" />
            </IconLink>
          }
        />
        <Tab
          id={`simple-tab-2`}
          aria-controls={`simple-tabpanel-2`}
          label={
            <IconLink>
              <img src={MessageIcon} alt="" width="100%" height="100%" />
            </IconLink>
          }
        />
        <Tab
          id={`simple-tab-3`}
          aria-controls={`simple-tabpanel-3`}
          label={
            <IconLink>
              <img src={ProposalIcon} alt="" width="100%" height="100%" />
            </IconLink>
          }
          onClick={handleSetProfile}
        />
        <Tab
          id={`simple-tab-4`}
          aria-controls={`simple-tabpanel-4`}
          label={
            <IconLink>
              <img src={SettingIcon} alt="" width="100%" height="100%" />
            </IconLink>
          }
        />
        {new Array(5).fill(1).map((_, key: number) => (
          <Tab
            key={key}
            id={`simple-tab-${5 + key}`}
            aria-controls={`simple-tabpanel-${5 + key}`}
            label=""
            sx={{ display: 'none' }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export { SideBar }
