import { styled, Box, Button } from '@mui/material'

export const ArticleBox = styled(Box)(({ theme }) => ({
  // border: '1px solid' + theme.palette.border.light,
  border: '1px solid' + theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  height: '320px',
  justifyContent: 'center',
  margin: '36px 0px',
}))

export const CButton = styled(Button)(({ theme }) => ({
  background: 'transparent',
  // border: '1px solid ' + theme.palette.border.light,
  border: '1px solid' + theme.palette.background.default,
  borderRadius: '0px',
  color: theme.palette.text.disabled,
  fontFamily: 'Fractul',
  fontSize: '30px',
  fontWeight: 600,
  textTransform: 'capitalize',
  width: '100%',
}))

export const UploadButton = styled(Button)(() => ({
  alignItems: 'center',
  background: '#E90026',
  color: '#FFFFFF',
  display: 'flex',
  fontFamily: 'Fractul',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: 800,
  gap: '10px',
  lineHeight: '19px',
  padding: '30px 120px',
  textAlign: 'center',
  textTransform: 'capitalize',
}))
