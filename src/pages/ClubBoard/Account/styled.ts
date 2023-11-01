import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Heading = styled(Typography)(() => ({
  color: '#F8F9FA',
  fontFamily: 'Fractul',
  fontSize: '60px',
  fontStyle: 'normal',
  fontWeight: 800,
  lineHeight: '50px',
  textTransform: 'uppercase',
}))

export const Text = styled(Typography)(() => ({
  alignItems: 'center',
  color: '#9AA0A6',
  display: 'flex',
  fontFamily: 'Andale Mono Regular',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: '-0.05em',
  lineHeight: '27px',
  margin: '24px 0px',
}))

export const HeadButton = styled(Button)(() => ({
  background: '#202124',
  color: '#F8F9FA',
  fontFamily: 'Andale Mono Regular',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '19px',
  padding: '4px 16px',
}))
export const SubHead = styled(Heading)(() => ({
  fontSize: '36px',
}))
export const Container = styled(Box)(() => ({
  border: '1px solid #D9D9D9',
  marginBottom: '48px',
  padding: '48px',
}))
export const Card = styled(Box)(() => ({
  background: '#17181B',
  border: '1px solid #D9D9D9',
  padding: '36px',
}))
