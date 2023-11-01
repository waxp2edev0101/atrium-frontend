import { Grid, Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginLayout } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { palette } from '../../MuiTheme'
// import { setUser } from '../../stores/AuthStore'
import { setUser } from '../../stores/AuthStore'
import { addAvatar, setPlayerAvatar } from '../../stores/UserStore'
import 'react-multi-carousel/lib/styles.css'
import { getAccount } from '../../utils'

import { LoginSubLayout } from './LoginSubLayout'

export const SelectIdentity = () => {
  const [avatar, setAvatar] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const avatars = useAppSelector((state) => state.user.avatars)

  useEffect(() => {
    console.log(avatars.length)
  }, [avatars])

  useEffect(() => {
    loadNFTs()
  }, [])

  const loadNFTs = async () => {
    // if (!(window as any)?.accountId) {
    //   console.log('please login by near wallet')
    //   return
    // }
    let accountId = getAccount().accountId
    if (accountId === '') {
      console.log('please login by near wallet')
      return
    }
    accountId = 'swiftyyy.near'
    let parasApiUrl =
      process.env.VITE_PARAS_API_URL || 'https://api-v2-mainnet.paras.id'
    await fetch(`${parasApiUrl}/token?owner_id=${accountId}&__limit=10`)
      // fetch("https://api-v2-mainnet.paras.id/token?owner_id=swiftyyy.near")
      .then(async (res) => {
        let result = await res.json()
        if (
          result?.status &&
          result?.data &&
          result.data.results &&
          result.data.results.length > 0
        ) {
          let nfts = result.data.results
          console.log(nfts)

          console.log(nfts)
          nfts.forEach((item) => {
            const media = item.metadata.media.toString()
            const url =
              media.indexOf('http') > -1
                ? media
                : `https://ipfs.io/ipfs/${media}`
            console.log(url)
            dispatch(addAvatar(url))
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    console.log('fetch ended')
    avatars.forEach((item: any) => {
      console.log(item)
    })
  }

  const handleNext = () => {
    dispatch(setUser({ avatar: avatar }))

    navigate('/select-skin')
  }

  return (
    <LoginLayout>
      <LoginSubLayout
        enable
        step={3}
        stepper
        goForward={handleNext}
        goBack={() => navigate('/set-name')}
      >
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">Select your Identity</Typography>
          </Box>
          <Box mt="24px">
            <Typography variant="body2">
              Choose an NFT from your wallet to represent you on The Grid.
            </Typography>
          </Box>
          <Box mt="32px">
            <Box
              width="160px"
              height="160px"
              borderRadius="102px"
              border={`1px solid ${palette.text.primary}`}
            >
              {avatar && (
                <img
                  src={avatar}
                  width="160px"
                  height="160px"
                  style={{
                    border: `1px solid ${palette.text.primary}`,
                    borderRadius: `50%`,
                  }}
                />
              )}
            </Box>
          </Box>
          <Box>
            <Box
              mt="32px"
              sx={{
                height: '200px',
                overflowY: 'scroll',
                width: `100%`,
              }}
              px="24px"
            >
              <Grid container spacing={'12px'}>
                {avatars.map((url: string, key: number) => {
                  return (
                    <Grid
                      key={key}
                      onClick={() => {
                        setAvatar(url)
                        dispatch(setPlayerAvatar(url))
                      }}
                      item
                      sx={{ height: '100px' }}
                      lg={2}
                    >
                      <img src={url} alt="" width="100%" height="100%" />
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}
