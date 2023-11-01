import Box from '@mui/material/Box'
import React from 'react'

import { DisabledText, FractulAltText } from '../../../../components/Styled'
import { palette } from '../../../../MuiTheme'
// import Tweet from './Tweet'
const Tweet = ({ name, text }: { name?: string; text?: string }) => {
  return (
    <Box sx={{ padding: '8px' }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ padding: '0px 24px' }}>
          <img src={`/refresh.png`} alt="" />
        </Box>
        <FractulAltText
          sx={{
            color: palette.text.disabled,
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
          }}
        >
          Antisocial Ape Club Retweeted
        </FractulAltText>
      </Box>
      <Box
        sx={{
          background: '#202124 !important',
          display: 'flex',
          gap: '12px',
          margin: '8px 0px',
          padding: '12px',
        }}
      >
        <img src={`/images/Ellipse 11.png`} width="38px" height="38px" alt="" />
        <Box sx={{}}>
          <Box sx={{ display: 'flex', gap: '4px', padding: '10px 0px' }}>
            <FractulAltText
              sx={{ fontSize: '16px', fontWight: '600', lineHeight: '20px' }}
            >
              {name}
            </FractulAltText>
            <DisabledText sx={{ fontFamily: 'Fractul Alt', opacity: '0.2' }}>
              @JustSayLes
            </DisabledText>
            <DisabledText
              sx={{
                fontFamily: 'Fractul Alt',
                opacity: '0.2',
                textAlign: 'right',
                width: '100%',
              }}
            >
              13m
            </DisabledText>
          </Box>
          <DisabledText
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              letterSpacing: '-0.05em',
              padding: '8px 0px',
            }}
          >
            {text}
          </DisabledText>
        </Box>
      </Box>
    </Box>
  )
}

const Stream = () => {
  return (
    <Box sx={{ height: 612, overflowY: 'scroll', width: 500 }}>
      <Tweet
        name="Les{0.1}"
        text="Finally decided to join the @ASAC_NFT
        club. Looks cool as hell. Do I get the twitter verify mark now?"
      />
      <Tweet
        name="DrCryptOG"
        text="New PFP, who dis?
        I decided I should join @ASAC_R0CKY and @ASAC_JELLY
        as a Crown Ape. 

        My fedora days are over 🙏🏼 

        RAINBOW CROWN APE 🔥🔥🔥
        @ASAC_NFT"
      />
    </Box>
  )
}

export default Stream
