// import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram'
// import PersonIcon from '@mui/icons-material/Person';
// import BuildIcon from '@mui/icons-material/Build';
// import SettingsIcon from '@mui/icons-material/Settings';
// import EventNoteIcon from '@mui/icons-material/EventNote';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import SearchIcon from '@mui/icons-material/Search'
import StarIcon from '@mui/icons-material/Star'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
  Container,
  Grid,
  Box,
  Button,
  Stack,
  LinearProgress,
  Paper,
  InputBase,
  IconButton,
} from '@mui/material'
import Icon from '@mui/material/Icon'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React from 'react'
// import DiscordIcon from '@mui/icons-material/Discord'

import { TabPanel, a11yProps } from '../components'
import { useAppDispatch } from '../hooks'
import { setSettingDialogOpen } from '../stores/SettingStore'

// const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

const Footer = () => {
  return (
    <Container className="setting_footer">
      <Grid container>
        <Grid item lg={4}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={1}>
              <span>chat</span>
              <div className="notice">1</div>
            </Stack>
            <KeyboardArrowUpIcon />
          </Stack>
        </Grid>
        <Grid item lg={4} className="setting_footer_main">
          <Stack direction="row" spacing={5} justifyContent="center">
            <img src="/images/ooui_user-avatar.png" alt="" />
            <img src="/images/dashicons_admin-tools.png" alt="" />
            <img src="/images/ic_round-backpack.png" alt="" />
            <img src="/images/ci_settings-filled.png" alt="" />
            {/* <PersonIcon fontSize="large" className="setting_footer_main_icon"/>
            <BuildIcon fontSize="large" className="setting_footer_main_icon"/>
            <SettingsIcon fontSize="large" className="setting_footer_main_icon"/>
            <EventNoteIcon fontSize="large" className="setting_footer_main_icon"/> */}
          </Stack>
        </Grid>
        <Grid item lg={4}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2}>
              <span>xp</span>
              <Stack direction="row" spacing={1} className="loading-block">
                {new Array(5).fill(1).map((_, key: number) => {
                  return <div key={key} />
                })}
              </Stack>
            </Stack>
            352/750
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

const SettingDialog = () => {
  const [value, setValue] = React.useState(0)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    // document.getElementsByClassName('video-grid')[0].style.display = 'none';
    let videoGrid = document.querySelector('.video-grid')
    let buttonGrid = document.querySelector('.button-grid')
    if (videoGrid) {
      ;(videoGrid as any).style.visibility = 'hidden'
      ;(buttonGrid as any).style.visibility = 'hidden'
    }
  }, [])
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue)
    setValue(newValue)
  }
  const close = () => {
    let videoGrid = document.querySelector('.video-grid')
    let buttonGrid = document.querySelector('.button-grid')
    if (videoGrid) {
      ;(videoGrid as any).style.visibility = 'visible'
      ;(buttonGrid as any).style.visibility = 'visible'
    }
    dispatch(setSettingDialogOpen(false))
  }

  return (
    <Container className="setting">
      <Box className="setting_panel">
        <Container>
          <Button sx={{ float: 'right', top: '-18px' }} onClick={close}>
            Close
          </Button>
          <Grid container spacing={2}>
            <Grid item lg={2} className="setting_panel_side_nav">
              <Stack direction="column" sx={{ height: '100%' }} spacing={3}>
                <div className="active">SOCIAL</div>
                <div>TOOLS</div>
                <div>INVENTORY</div>
                <div>TEAMS</div>
                <div>TOOLS</div>
                <div style={{ height: '100%' }}></div>
                <div>SETTINGS</div>
              </Stack>
            </Grid>
            <Grid item lg={10} sx={{ p: '0px' }} className="setting_panel_body">
              <Grid item lg={12} className="setting_panel_body_header_nav">
                <Stack direction="row" justifyContent="space-between">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Hub" {...a11yProps(0)} />
                    <Tab label="Profile" {...a11yProps(1)} />
                    <Tab label="Connections" {...a11yProps(2)} />
                    <Tab label="Jobs" {...a11yProps(3)} />
                    <Tab label="Edit Profile" {...a11yProps(4)} />
                  </Tabs>
                  <div>
                    <Paper
                      component="form"
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        p: '2px 4px',
                        width: 400,
                      }}
                    >
                      <InputBase
                        sx={{ flex: 1, ml: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                      />
                      <IconButton
                        type="submit"
                        sx={{ p: '10px' }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </div>
                </Stack>
              </Grid>
              <div className="setting_panel_body_tab_content">
                <TabPanel value={value} index={0}>
                  <Grid container>
                    <Grid item lg={4}>
                      item-1-grid-4
                    </Grid>
                    <Grid item lg={8}>
                      item-1-grid-8
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid
                    container
                    className="setting_panel_body_tab_content_profile"
                  >
                    <Grid
                      item
                      lg={3}
                      className="text-center"
                      sx={{ px: '24px', textAlign: 'center' }}
                    >
                      <Stack direction="column" spacing={2}>
                        <img src="/images/PFP_SKETCHES_1 1.png" alt="" />
                        <h1>swiftyyy</h1>
                        {/* <LinearProgress variant="determinate" value={normalise(props.value)} /> */}
                        <Stack
                          direction="row"
                          justifyContent="center"
                          spacing={1}
                        >
                          <p>LVL 72</p>
                          <Box sx={{ pt: '10px', width: '152px' }}>
                            <LinearProgress
                              variant="determinate"
                              color="error"
                              value={35}
                            />
                          </Box>
                        </Stack>
                        <p>Graphic Designer</p>
                        <div>
                          <Button sx={{ background: '#ED2424' }}>
                            Chat Now
                          </Button>
                        </div>
                        <div>
                          <Button sx={{ background: '#181B21' }}>
                            Email Me
                          </Button>
                        </div>
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                        >
                          <TwitterIcon sx={{ fontSize: '32px' }} />
                          <Icon sx={{ fontSize: '32px' }}>discord</Icon>
                          <InstagramIcon sx={{ fontSize: '32px' }} />
                          {/* <DiscordIcon /> */}
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item lg={9}>
                      <Stack direction="column" spacing={10}>
                        <div>
                          <h2>Description</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sollicitudin donec ipsum ac egestas at sit
                            risus ut nunc. Velit eu nec faucibus cursus lobortis
                            magna eleifend ultrices non.
                          </p>
                          <Stack direction="row" spacing={2}>
                            <Button>
                              <StarIcon />
                              &nbsp;5 Years+
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; University
                            </Button>
                          </Stack>
                        </div>
                        <div>
                          <h2>Skills</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sollicitudin donec ipsum ac egestas at sit
                            risus ut nunc. Velit eu nec faucibus cursus lobortis
                            magna eleifend ultrices non.
                          </p>
                          <Stack direction="row" spacing={2}>
                            <Button>
                              <StarIcon />
                              &nbsp; Adobe Illustrator
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; Adobe PhotoShop
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; Figma
                            </Button>
                          </Stack>
                        </div>
                        <div>
                          <h2>Jobs</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sollicitudin donec ipsum ac egestas at sit
                            risus ut nunc. Velit eu nec faucibus cursus lobortis
                            magna eleifend ultrices non.
                          </p>
                          <Stack direction="row" spacing={2}>
                            <Button>
                              <StarIcon />
                              &nbsp; Adobe Illustrator
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; Adobe PhotoShop
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; Figma
                            </Button>
                          </Stack>
                        </div>
                      </Stack>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid container>
                    <Grid item lg={4}>
                      item-3-grid-4
                    </Grid>
                    <Grid item lg={8}>
                      item-3-grid-8
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Grid container>
                    <Grid item lg={4}>
                      item-3-grid-4
                    </Grid>
                    <Grid item lg={8}>
                      item-3-grid-8
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <Grid container>
                    <Grid item lg={4}>
                      item-3-grid-4
                    </Grid>
                    <Grid item lg={8}>
                      item-3-grid-8
                    </Grid>
                  </Grid>
                </TabPanel>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Container>
  )
}

export default SettingDialog
