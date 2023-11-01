import { Box, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
// import React, { useState, useEffect } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { To } from 'react-router-dom'

import metamask from '../../assets/icons/metamask-logo.png'
import near_dark from '../../assets/icons/near-logo-dark.svg'
import near_light from '../../assets/icons/near-logo.png'
import phantom from '../../assets/icons/phantom-logo.png'
import { HoverBox, LoginLayout } from '../../components'
import { useAppDispatch } from '../../hooks'
import { palette } from '../../MuiTheme'
import { login, setUser, requestUser } from '../../stores/AuthStore'
// import { setWalletConnected } from '../../stores/UserStore'
// import { Wallet } from '../../types/Wallet'
// import { getAccount, loginNear, logoutNear } from '../../utils/nearAPI'
import { setWalletConnected, setPlayerName } from '../../stores/UserStore'
import { getAccount, loginNear } from '../../utils/nearAPI'
// import { loginSender } from '../../utils/senderAPI'

import { LoginSubLayout } from './LoginSubLayout'

export const WalletCard = ({
  wallet,
  commingSoon,
  active,
  handleClick,
}: {
  wallet: string
  commingSoon?: boolean
  active?: boolean
  handleClick?: AnyFunction
}) => {
  return (
    <Box
      p="50px"
      height={'370px'}
      sx={{
        background: active ? palette.text.primary : palette.background.paper,
      }}
      onClick={handleClick}
    >
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box position="relative">
          <img src={wallet} alt="" color={palette.text.primary} />
          <Box
            position="absolute"
            display={`${commingSoon ? 'flex' : 'none !important'}`}
            top="-40px"
          >
            <Typography variant="h4" color={palette.text.disabled}>
              comming soon
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
const ConnectWallet = () => {
  const navigate = useNavigate()
  // const [walletType, setWalletType] = useState(Wallet.None)
  const dispatch = useAppDispatch()
  // const walletConnected = useAppSelector((state) => state.user.walletConnected)
  const [enable, setEnable] = useState(false)

  useEffect(() => {
    const account = getAccount()
    if (account.accountId !== '') {
      dispatch(setWalletConnected(true))
      dispatch(setUser({ accountId: account.accountId }))
      setEnable(true)
    }
  }, [])

  // useEffect(() => {
  //   console.log('wallet connected: ', walletConnected)
  //   if (walletConnected) {
  //     const account = getAccount()
  //     console.log(account)
  //     dispatch(setUser({ accountId: account.accountId }))
  //     fetchLogin('/success', '/set-name')
  //   }
  // }, [walletConnected])

  const fetchLogin = async (loggedUrl: To, unloggedUrl: To) => {
    try {
      const accountId = getAccount().accountId
      if (accountId !== '') {
        const resultAction = await dispatch(login(accountId))
        const originalPromiseResult = unwrapResult(resultAction)
        if (originalPromiseResult.accessToken == '') {
          navigate(unloggedUrl)
        } else {
          dispatch(setPlayerName(accountId))
          await dispatch(requestUser())
          navigate(loggedUrl)
        }
      } else {
        console.log('account id is not defined')
      }
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError)
    }
  }

  // const handleClickBtn = async () => {
  //   // console.log(location)
  //   // if (walletType === Wallet.Sender) {
  //   //   await logoutNear()
  //   //   const loggedIn = await loginSender()
  //   //   if (loggedIn) {
  //   //     dispatch(setWalletConnected(true))
  //   //     navigate('/set-name')
  //   //   }
  //   // } else if (walletType === Wallet.Near) {
  //   //   loginNear(`${window.location.href}set-name`)
  //   // }
  //   loginNear();
  // }

  return (
    <LoginLayout>
      <LoginSubLayout
        stepper
        step={1}
        enable={enable}
        goForward={() => fetchLogin(`/success`, `/set-name`)}
        goBack={() => navigate('/signin')}
      >
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">Select a Wallet Source</Typography>
          </Box>
          <Box gap="24px" mt="24px">
            <WalletCard wallet={phantom} commingSoon />
            <HoverBox>
              <WalletCard
                wallet={enable ? near_dark : near_light}
                active={enable}
                handleClick={loginNear}
              />
            </HoverBox>
            <WalletCard wallet={metamask} commingSoon />
          </Box>
          {/* <Button
            onClick={() => setWalletType(Wallet.Near)}
            className={`atrium_btn ${walletType === Wallet.Near ? 'active' : ''}`}
            sx={{ mt: '12px' }}
          >
            NEAR Wallet
          </Button>
          <Button
            onClick={() => setWalletType(Wallet.Sender)}
            className={`atrium_btn ${
              walletType === Wallet.Sender ? 'active' : ''
            }`}
          >
            Sender Wallet
          </Button>
          <Button
            onClick={handleClickBtn}
            className="atrium_btn atrium_btn_primary"
            sx={{ mt: '56px' }}
          >
            NEXT
          </Button> */}
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}

export { ConnectWallet }
