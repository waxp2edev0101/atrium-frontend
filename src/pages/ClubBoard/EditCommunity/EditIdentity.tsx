import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Typography, Grid } from '@mui/material'
import Icon from '@mui/material/Icon'
import React from 'react'

import { Button, TextField } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { ICommunity } from '../../../types/model'
// import type { IUser } from '../../../types/model'

// import { TextPanel } from './EditContent'
import { EditProfileLayout } from './EditProfileLayout'
import { AntSwitch } from './styled'
// import { AntSwitch } from '../Chat/AntSwitch'<Icon sx={{ fontSize: '32px' }}>discord</Icon>

const SocialConnect = ({
  title,
  icon,
  name,
  checked,
  onChange,
}: {
  title: string
  icon: React.ReactNode
  name: string
  checked?: boolean
  onChange?: AnyFunction
}) => {
  return (
    <Box>
      <Button
        className="primary outlined"
        sx={{
          padding: '24px 48px',
          width: '100%',
        }}
        color={palette.text.primary}
      >
        <Box display="flex" gap="20px">
          {icon}
          <Typography p="5px" variant="h5">
            {title} Connected
          </Typography>
        </Box>
      </Button>
      <Box
        p="16px 24px"
        display="flex"
        gap="12px"
        width="100%"
        justifyContent="center"
      >
        {/* <AntSwitch /> */}
        <Switch name={name} checked={checked || false} onChange={onChange} />
        <Typography variant="caption" py="2px">
          Displayed on Profile
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h6"
          color={palette.text.disabled}
          sx={{ textDecoration: 'underline' }}
        >
          Disconnect {title}
        </Typography>
      </Box>
    </Box>
  )
}
const Switch = ({
  name,
  checked,
  onChange,
}: {
  name: string
  checked?: boolean
  onChange?: AnyFunction
}) => {
  console.log('Switch checked: ', checked)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(name, event.target.checked)
    }
  }
  return <AntSwitch checked={checked || false} onChange={handleChange} />
}
export const EditIdentity = ({
  // data,
  // setData,
  save,
}: {
  data?: ICommunity
  setData?: AnyFunction
  save: AnyFunction
}) => {
  // const handleSwitchChange = (name: string, value: boolean) => {
  //   setProfile({ ...profile, [name]: value })
  // }
  return (
    <EditProfileLayout
      title="Identity Information"
      subtitle="Edit the top information featured on your profile. "
      save={save}
    >
      <Box>
        <Typography variant="h6">Nickname</Typography>
        <Box py="12px">
          <Grid container>
            <Grid item lg={6}>
              <TextField className="rounded dark" /*value={data.username}*/ />
            </Grid>
            <Grid item lg={6} />
          </Grid>
        </Box>
      </Box>
      <Box mt="32px">
        <Typography variant="h6">Bio</Typography>
        {/* <TextPanel> */}
        {/* <Typography variant="body1" color={palette.text.primary}>
          {profile.bio}
        </Typography> */}
        {/* </TextPanel> */}
        <Box mt={2}>
          <TextField
            name="bio"
            // variant="primary"
            className="rounded"
            // value={profile.bio}
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   setProfile({ ...profile, bio: e.target.value })
            // }
          />
        </Box>
      </Box>
      <Box mt="90px">
        <Typography variant="h4">Links</Typography>
        <Grid container spacing={`24px`} mt="24px">
          <Grid item lg={6}>
            <Box>
              <Typography variant="h6">website url</Typography>
              <Box py="12px">
                <TextField
                  className="rounded default"
                  // value={profile.websiteUrl}
                  name="websiteUrl"
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  //   setProfile({ ...profile, websiteUrl: e.target.value })
                  // }
                />
              </Box>
              <Box p="0px 24px" display="flex" gap="12px">
                <Switch
                  name="isWebsiteUrlDOP"
                  // checked={profile.isWebsiteUrlDOP || false}
                  // onChange={handleSwitchChange}
                />
                <Typography variant="caption" py="2px">
                  Displayed on Profile
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box>
              <Typography variant="h6">email</Typography>
              <Box py="12px">
                <TextField
                  name="email"
                  className="rounded default"
                  // value={profile.email}
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  //   setProfile({ ...profile, email: e.target.value })
                  // }
                />
              </Box>
              <Box p="0px 24px" display="flex" gap="12px">
                <Switch
                  name="isEmailNotification"
                  // checked={profile.isEmailNotification || false}
                  // onChange={handleSwitchChange}
                />
                <Typography variant="caption" py="2px">
                  Notifications On
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={`24px`} mt="32px">
          <Grid item lg={4}>
            <SocialConnect
              title="discord"
              icon={<Icon sx={{ fontSize: '32px' }}>discord</Icon>}
              name="isDiscordDOP"
              // checked={profile.isDiscordDOP || false}
              // onChange={handleSwitchChange}
            />
          </Grid>
          <Grid item lg={4}>
            <SocialConnect
              title="twitter"
              icon={<TwitterIcon sx={{ fontSize: '32px' }} />}
              name="isTwitterDOP"
              // checked={profile.isTwitterDOP || false}
              // onChange={handleSwitchChange}
            />
          </Grid>
          <Grid item lg={4}>
            <SocialConnect
              title="instagram"
              icon={<InstagramIcon sx={{ fontSize: '32px' }} />}
              name="isInstagramDOP"
              // checked={profile.isInstagramDOP || false}
              // onChange={handleSwitchChange}
            />
          </Grid>
        </Grid>
      </Box>
    </EditProfileLayout>
  )
}
