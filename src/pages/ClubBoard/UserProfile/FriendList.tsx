import { Box } from '@mui/material'

import { AtButton, AText } from '../../../components'
import { palette } from '../../../MuiTheme'
import avatar from '../images/friend-avatar.png'

import { Container as PContainer, OnlineIcon } from './styled'

export const FriendItemContent = ({
  text1,
  text2,
}: {
  text1: string
  text2: React.ReactNode
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <AText
        className="secondary"
        sx={{
          fontSize: '18px',
          fontWeight: '800',
          lineHeight: '18px',
          textAlign: 'center',
        }}
      >
        {text1}
      </AText>
      <AText
        className="disabled"
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          letterSpacing: '-0.05em',
          lineHeight: '18px',
        }}
      >
        {text2}
      </AText>
    </Box>
  )
}
export const FriendItem = ({ index }: { index: number }) => {
  return (
    <Box
      display="flex"
      gap="12px"
      p="9px"
      sx={{
        background: `${
          index % 2 === 1 ? palette.background.paper : 'transparent'
        }`,
      }}
    >
      <img src={avatar} alt="" width="46px" height="46px" />
      <Box display="flex" gap="32px" p="5px">
        <FriendItemContent
          text1="RandomGuy123"
          text2={
            <Box display="flex" gap="4px">
              <OnlineIcon sx={{ margin: '4px' }} />
              Online
            </Box>
          }
        />
        <FriendItemContent text1="July3rd" text2="Friend Since" />
        <FriendItemContent text1={index.toString()} text2="Level" />
      </Box>
    </Box>
  )
}
export const FriendList = () => {
  return (
    <PContainer>
      <Box display="flex" justifyContent="space-between">
        <AText
          className=""
          sx={{
            fontSize: '30px',
            fontWeight: 700,
          }}
        >
          friend list (364)
        </AText>
        <Box py="6px">
          <AtButton variant="small" text="see all" />
        </Box>
      </Box>
      <Box height="320px" sx={{ overflowY: 'scroll' }} mt="12px">
        {new Array(10).fill(2).map((_, key: number) => (
          <FriendItem key={key} index={key} />
        ))}
      </Box>
    </PContainer>
  )
}
