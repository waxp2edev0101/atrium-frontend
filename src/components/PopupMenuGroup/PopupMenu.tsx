import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'
// import * as React from 'react'

// import PostIcon from '../../assets/icons/frame-icon.png'
import FrameIcon from '../../assets/icons/frame-icon.png'
import HomeIcon from '../../assets/icons/home-icon.png'
import MessageIcon from '../../assets/icons/message-icon.png'
import SettingIcon from '../../assets/icons/setting-icon.png'
import WalletIcon from '../../assets/icons/wallet-icon.png'
import avatar from '../../assets/images/avatar-6.png'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { openSnack } from '../../stores/AppStore'
import { setBoardDialogOpen, setCurrentBoardTab } from '../../stores/UiStore'
import { logoutNear } from '../../utils'
import { HoverBox } from '../elements'

export const PopupMenu = ({ handleClose }: { handleClose: AnyFunction }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)

  const disconnectWallet = async () => {
    await logoutNear((succeed: boolean, e?: any) => {
      if (succeed) {
        dispatch(
          openSnack({
            content: 'Succeed to logout',
            open: true,
            type: 'success',
          })
        )
        navigate('/')
      } else {
        dispatch(
          openSnack({
            content: 'Failed to logout' + e.toString(),
            open: true,
            type: 'error',
          })
        )
      }
    })
  }
  const MenuItemContent = ({
    icon,
    text,
    id,
  }: {
    id: number
    icon: string
    text: React.ReactNode
  }) => {
    return (
      <HoverBox
        display="flex"
        gap="16px"
        py="12px"
        width="154px"
        onClick={() => {
          dispatch(setBoardDialogOpen(true))
          if (id >= 0) dispatch(setCurrentBoardTab(id))
          else console.log('invalid tab id in popup menu')
        }}
      >
        <img src={icon} alt="" width="24px" height="24px" />
        <Box py="2px">
          <Typography variant="h6">{text}</Typography>
        </Box>
      </HoverBox>
    )
  }

  return (
    <Box>
      <Box className="MuiPaper-root" p="24px" onClick={handleClose}>
        <Box display="flex" gap="12px" py="12px">
          <img
            src={user.avatar ?? avatar}
            alt=""
            width="32px"
            height="32px"
            style={{ borderRadius: '16px' }}
          />
          <Box py="5px">
            <Typography
              variant="h6"
              sx={{ textDecoration: 'underline', textTransform: 'lowercase' }}
            >
              {user.username}
            </Typography>
          </Box>
        </Box>
        <MenuItemContent icon={HomeIcon} text={`home`} id={0} />
        <MenuItemContent icon={FrameIcon} text={`posts`} id={1} />
        <MenuItemContent icon={MessageIcon} text={`messages`} id={2} />
        <MenuItemContent icon={SettingIcon} text={`settings`} id={3} />
        <MenuItemContent icon={WalletIcon} text={`view wallet`} id={4} />
        <Box>
          <Typography
            variant="caption"
            sx={{ fontSize: '12px', textDecoration: 'underline' }}
            onClick={disconnectWallet}
          >
            disconnect wallet
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
