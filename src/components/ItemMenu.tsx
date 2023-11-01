import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box } from '@mui/material'
// import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import item1 from '../assets/images/item-1.png'

const Divider = styled(Box)(() => ({
  borderLeft: `1px solid white`,
  height: '100%',
  margin: '0px 32px',
  width: '0px',
}))

const AnimationWrapper = styled(Box)`
  @keyframes collapse-open {
    0% {
      height: 0px;
    }
    100% {
      height: 80x;
    }
  }

  &.open {
    animation: collapse-open;
    animation-duration: 0.5s;
    height: 80px;
  }
  &.close {
    height: 0px;
    & * {
      height: 0px;
      padding: 0px;
    }
  }
`
const Item = ({ img }: { img?: string }) => {
  return (
    <Box width="48px" height="48px" sx={{ background: '#A8A8A8' }}>
      {img && <img src={img} width={`100%`} height="100%" />}
    </Box>
  )
}
export const ItemMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box
      sx={{
        bottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        position: 'fixed',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',

          flexDirection: 'column',
          // backdropFilter: 'opacity(20%)',
          // backgroundColor: 'rgba(26, 26, 26, 0.9)',
          // width:'100%',
          height: '116px',
          justifyContent: 'end',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          p="6px"
          // width='100%'
          onClick={() => setOpen(!open)}
          sx={{
            backdropFilter: 'opacity(20%)',
            backgroundColor: 'rgba(26, 26, 26, 0.9)',
          }}
        >
          {open ? (
            <KeyboardArrowDownIcon sx={{ color: 'white' }} />
          ) : (
            <KeyboardArrowUpIcon sx={{ color: 'white' }} />
          )}
        </Box>
        <AnimationWrapper className={open ? 'open' : 'close'}>
          <Box
            p="16px"
            sx={{
              backdropFilter: 'opacity(20%)',

              backgroundColor: 'rgba(26, 26, 26, 0.9)',

              borderTop: `1px solid white`,
              // display: open ? 'flex' : 'none',
              display: 'flex',
            }}
          >
            <Box>
              <Item img={item1} />
            </Box>
            {new Array(5).fill(2).map((_, key: number) => (
              <Box key={key} display="flex">
                <Divider />
                <Item />
              </Box>
            ))}
          </Box>
        </AnimationWrapper>
      </Box>
    </Box>
  )
}
