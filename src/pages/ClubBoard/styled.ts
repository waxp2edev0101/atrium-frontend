import { Box } from '@mui/material'
import { styled as muiStyled } from '@mui/material/styles'
import styled from 'styled-components'

import { palette } from '../../MuiTheme'

export const Root = styled.section`
  // background-color: ${palette.background.default};
  background-color: ${palette.grey[300]};
  // background-color: ${palette.primary.main};
  // background-colro: #A8A8A8;/
  // height: 1786px;
  // min-height: 1786px;
  // height: 100%;
  min-height: 100%;
  width: 100%;
  // display:flex;
`

export const Page = styled.main`
  background-color: '#0E1013 !important';
  display: grid;
  gap: 8px;
  grid-template-areas:
    'main main main main main main'
    'main main main main main main'
    'carousel carousel carousel livechat livechat livechat'
    'carousel carousel carousel livechat livechat livechat'
    'flex flex flex flex flex flex'
    'flex flex flex flex flex flex'
    'flex flex flex flex flex flex';

  height: 100%;
  padding-top: 64px;
  // padding-top: 128px;
  width: 100%;
  max-width: 1500px;
  // margin-left: 80px;
  padding-left: 80px;
  margin: 32px auto;
`
export const Exploration = styled.main`
  display: grid;
`
export const Main = styled.div`
  margin: 0px 0px 0px 80px;
  padding-bottom: 120px;
`
export const ModalContainer = styled.div`
  // margin: 160px 0px 0px 80px;
  // padding: 90px 0px 0px 80px;
  padding: 0px 0px 0px 80px;
  height: 100%;
`
export const Community = muiStyled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.text.primary}`,
  padding: '32px 24px',
}))
