import AccountCircle from '@mui/icons-material/AccountCircle'
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MailIcon from '@mui/icons-material/Mail'
import MoreIcon from '@mui/icons-material/MoreVert'
import NotificationsIcon from '@mui/icons-material/Notifications'
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Typography } from '@mui/material'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styled from '@mui/material/styles/styled'
import React from 'react'

import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { setCurrentBoardTab } from '../../../stores/UiStore'

import AccountSelect from './AccountSelect'

const IconButtonBox = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '0px',
  padding: '12px 14px',
}))

const MenuIconList: React.FC = () => {
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleBtnAddArticle = () => {
    dispatch(setCurrentBoardTab(8))
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <>
      <Box sx={{ display: { md: 'flex', xs: 'none' }, gap: '12px' }}>
        {/* <IconButtonBox
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={3} color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButtonBox>
        <IconButtonBox
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <EmailOutlinedIcon />
          </Badge>
        </IconButtonBox> */}
        <IconButtonBox
          size="large"
          aria-label="plus"
          color="inherit"
          sx={{ background: palette.secondary.dark }}
          onClick={handleBtnAddArticle}
        >
          <Typography
            sx={{ fontSize: '20px', fontWeight: 600, padding: '0px 8px' }}
          >
            +
          </Typography>
        </IconButtonBox>
        <AccountSelect />
        {/* <IconButtonBox size="large" aria-label="plus" color="inherit">
          <SettingsOutlinedIcon />
        </IconButtonBox> */}
        {/* <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
      </Box>
      <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </>
  )
}

export default MenuIconList
