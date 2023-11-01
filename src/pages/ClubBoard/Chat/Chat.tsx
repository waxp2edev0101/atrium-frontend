// import { SearchIcon } from '@mui/icons-material';
import { Box, styled } from '@mui/material'
import { useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { updateFriend } from '../../../stores/UserStore'
import type { IUser } from '../../../types/model'
import { apiGetRequest } from '../../../utils'
import { ModalContainer } from '../styled'

import { ContactList, ChatBox, ContactInfo } from './'

export const ChatContainer = styled(Box)(() => ({
  '&.main': {
    // borderLeft: `1px solid ${palette.primary.main}`,
    // borderRight: `1px solid ${palette.primary.main}`,
    border: 'none',
    width: '100%',
  },
  border: `1px solid ${palette.primary.main}`,
  padding: '24px',
  width: '480px',
}))
export type UserProps = {
  username: string
  accountId: string
  status: 'online' | 'offline'
  avatar: string
  _id: string
}

const url = process.env.VITE_API_URL || 'http://localhost:2567'

export const Chat = () => {
  const dispatch = useAppDispatch()
  const me: IUser = useAppSelector((state) => state.auth.user)
  const friends = useAppSelector((state) => state.user.friends)
  const [opponentId, setOpponentId] = useState('')
  const [opponentInfo, setOpponentInfo] = useState<UserProps>({} as UserProps)
  // const [friends, setFriends] = useState<UserProps[]>([])

  useEffect(() => {
    const init = async () => {
      const res = await apiGetRequest(`${url}/user/friend/all`)

      if (res.status === 200 && res.data) {
        console.log('Loaded friends: ', res.data)
        dispatch(updateFriend(res.data))
        if (res.data.length > 0) {
          setOpponentId(res.data[0].accountId)
          setOpponentInfo(res.data[0])
        }
      } else {
        console.log('Failed to load friends')
      }
    }

    init()
  }, [])

  useEffect(() => {
    friends.forEach((item: UserProps) => {
      if (item.accountId === opponentId) setOpponentInfo(item)
    })
  }, [opponentId, friends])

  return (
    <Box>
      <ModalContainer>
        <Box display="flex">
          <ChatContainer>
            <ContactList
              contacts={friends}
              opponentId={opponentId}
              setOpponentId={setOpponentId}
            />
          </ChatContainer>
          <ChatContainer className="main">
            <ChatBox opponentInfo={opponentInfo} selfInfo={me} />
          </ChatContainer>
          <ChatContainer>
            <ContactInfo info={opponentInfo} />
          </ChatContainer>
        </Box>
      </ModalContainer>
    </Box>
  )
}
