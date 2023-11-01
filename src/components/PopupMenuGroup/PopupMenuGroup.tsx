import Box from '@mui/material/Box'
import * as React from 'react'

import logo from '../../assets/images/atrium-logo-large.png'
import { Button } from '../elements'

import { PopupMenu } from './PopupMenu'

import './popup-menu.style.scss'

export const PopupMenuGroup = () => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      textAlign={`right`}
      sx={{
        background: 'rgba(26, 26, 26, 0.8)',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
        bottom: '0px',
        margin: '16px',
        position: 'fixed',
        right: '0px',
      }}
      className={open ? `popup-menu-group` : ``}
    >
      <Button
        onClick={handleClick}
        className=""
        sx={{
          background: 'rgba(26, 26, 26, 0.8) !important',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)) !important`,
          bottom: '0px',
          padding: '10px',
          position: 'absolute',
          right: '0px',
        }}
      >
        <Box width="56px" height="56px" className={`popup-button`}>
          <img src={logo} alt="" width="100%" height="100%" />
        </Box>
      </Button>
      <PopupMenu handleClose={handleClose} />
    </Box>
  )
}
