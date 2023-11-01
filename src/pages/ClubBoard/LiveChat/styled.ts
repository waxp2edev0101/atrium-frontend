import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const Root = styled(Paper)(() => ({
  borderRadius: '0px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  padding: '24px 24px 12px 24px',
  // paddingBottom: 0,
  // paddingLeft: '20px',
  // paddingRight: '10px',
  // paddingTop: '25px',
  width: '100%',
}))

export const Heading = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  height: 'auto',
  justifyContent: 'space-between',
  width: '100%',
}))

export const Timeline = styled('div')(() => ({
  height: '240px',
  overflowY: 'scroll',
  width: '100%',
}))

export const SendMessage = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  // height: '60px',
  justifyContent: 'flex-end',
  // marginTop: '12px',
}))
