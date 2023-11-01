import CloseIcon from '@mui/icons-material/Close'
import { Box, Typography } from '@mui/material'

// import avatar2 from '../../../assets/images/avatar-6.png'
import { Button, EmptyBox } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { ITag, IFriend } from '../../../types/model'
import { Community as Container } from '../styled'
// import { MessageItem } from './'

export const TagButton = ({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) => {
  return (
    <Button className="tag primary outlined tag-small" color={color}>
      {children}
    </Button>
  )
}
export const Member = ({ index, data }: { index: number; data: IFriend }) => {
  // console.log('member data: ', data)
  // const [user, setUser] = useState(data.)
  return (
    <Box
      p="8px 16px"
      display="flex"
      justifyContent="space-between"
      sx={{
        background: index % 2 === 0 ? palette.background.paper : '',
      }}
    >
      <Box display="flex" gap="12px">
        <img src={data.user?.avatar} alt="" width="46px" height="46px" />
        <Box py="10px">
          <Typography variant="h5">{data.user?.username}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5">15</Typography>
        <Typography variant="caption" sx={{ fontSize: '12px !important' }}>
          NFTs
        </Typography>
      </Box>
      <Box display="flex" gap="12px">
        {data.user?.tags && data.user?.tags.length ? (
          data.user.tags?.map((item: ITag, key: number) => (
            <Box py="160px" key={key}>
              <TagButton color="#FF75CD">{item.tag}</TagButton>
            </Box>
          ))
        ) : (
          <EmptyBox></EmptyBox>
        )}
      </Box>
    </Box>
  )
}

export const Members = ({
  isModal,
  handleOpen,
  users,
}: {
  isModal: boolean
  handleOpen: (f: boolean) => void
  users?: IFriend[]
}) => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" height="100%">
        <Typography variant="h2">Friends</Typography>
        {isModal ? (
          <Box onClick={() => handleOpen(false)}>
            <CloseIcon sx={{ color: palette.text.primary }} />
          </Box>
        ) : (
          <Box>
            <Button
              className="primary outlined"
              color={palette.secondary.light}
              onClick={() => handleOpen(true)}
            >
              view all
            </Button>
          </Box>
        )}
      </Box>
      <Box display="flex" gap="12px" pt="18px">
        {users && users.length > 0 && (
          <>
            <TagButton color="#A8A8A8">all</TagButton>
            <TagButton color="#FF75CD">whitelisted</TagButton>
            <TagButton color="#90E487">OG member</TagButton>
            <TagButton color="#FFB350">devs</TagButton>
            <TagButton color="#DE58FF">moderator</TagButton>
            <TagButton color="#71E5FF">founder</TagButton>
          </>
        )}
      </Box>
      {users && users.length ? (
        <Box
          mt="24px"
          sx={{
            height: '360px',
            overflowY: 'scroll',
          }}
        >
          {users.map((item: IFriend, key: number) => (
            <Member index={key} key={key} data={item} />
          ))}
        </Box>
      ) : (
        <EmptyBox>No Friends</EmptyBox>
      )}
    </Container>
  )
}
