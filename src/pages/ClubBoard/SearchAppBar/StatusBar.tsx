import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StatusBarContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  // backgroundColor: '#17181B',
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  justifyContent: 'center',
  padding: '12px 0px',
}))
const TextBox = styled(`div`)(() => ({
  alignItems: 'center',
  color: '#80868B',
  display: 'flex',
  fontFamily: 'Fractul',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '32px',
}))
const Text = styled(Typography)(() => ({
  alignItems: 'center',
  color: '#80868B',
  display: 'flex',
  fontFamily: 'Fractul',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '32px',
}))

const fontWeight = 600

export const StatusBar = () => {
  return (
    <StatusBarContainer>
      <TextBox>
        $ATR PRICE:
        <Text sx={{ fontWeight: fontWeight }}>&nbsp; $5.84</Text>
      </TextBox>
      <TextBox>
        PLAYERS ONLINE:
        <Text sx={{ fontWeight: fontWeight }}>&nbsp; 104</Text>
      </TextBox>
      <TextBox>
        TRANSACTIONS 24H:
        <Text sx={{ fontWeight: fontWeight }}>&nbsp; 526</Text>
      </TextBox>
      <TextBox>
        VOLUME 24H:
        <Text sx={{ fontWeight: fontWeight }}>&nbsp; 590,234 $ATR</Text>
      </TextBox>
    </StatusBarContainer>
  )
}
