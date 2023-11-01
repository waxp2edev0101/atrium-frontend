import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import coolCat from '../../../assets/icons/reaction-cool-cat.png'
import seemsGood from '../../../assets/icons/reaction-seems-good.png'
import smile from '../../../assets/icons/reaction-smile.png'
import land1 from '../../../assets/images/land-1.png'
import land2 from '../../../assets/images/land-2.png'
import land3 from '../../../assets/images/land-3.png'
import post2 from '../../../assets/images/post-2.png'
import { AText, HoverBox } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { setCurrentPost } from '../../../stores/AppStore'
import { setCommunity } from '../../../stores/CommunityStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { ICommunity, IFile, IPost } from '../../../types/model'
import { apiGetRequest, apiUrl } from '../../../utils'
import * as PContainer from '../styled'
import { PostContainer } from '../UserProfile/PostCarousel'

import { HorizontalPostComp } from './HorizontalPostComp'
import { Container } from './styled'
import { User } from './User'

function truncateText(text: string | undefined, size: number) {
  return text && text?.length > size
    ? text.substring(0, size).concat('...')
    : text
}
export const Reactions = () => {
  return (
    <Box display="flex" gap="4px">
      <img src={smile} alt="" width="18px" height="18px" />
      <img src={seemsGood} alt="" width="18px" height="18px" />
      <img src={coolCat} alt="" width="18px" height="18px" />
      <Typography variant="body2" fontSize={14}>
        +204
      </Typography>
    </Box>
  )
}

const DetailedPost = ({ data }: { data?: IPost }) => {
  return (
    <PostContainer img={`${(data?.media as IFile)?.path}`}>
      <Box display="flex" justifyContent={`space-between`}>
        <Box>
          <Typography variant="h2">
            {data?.title || `Taking advantage of your clan`}
          </Typography>
          <Box mt={2}>
            <Typography variant="caption">
              {truncateText(data?.body, 50) ||
                `Tips on how to network and make the most of your Atrium connections.{' '}`}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
          }}
        >
          <Reactions />
        </Box>
      </Box>
    </PostContainer>
  )
}
const SimplePost = ({ data }: { data?: IPost }) => {
  return (
    <PostContainer img={`${(data?.media as IFile)?.path}`}>
      <Typography variant="h4">
        {data?.title || `How Atrium’s Tokenomics work and why you should ...`}
      </Typography>
      <Box mt={2}>
        <User data={data?.author} />
      </Box>
    </PostContainer>
  )
}
export const Dashboard = () => {
  const delay = 7000
  const dispatch = useAppDispatch()
  const [communities, setCommunities] = useState<ICommunity[]>([])
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      getCommunities()
      getPosts()
    }

    const id = setInterval(() => updatePosts(), delay)
    return () => {
      isMounted = false
      clearInterval(id)
    }
  }, [])

  const updatePosts = () => getPosts()
  const getPosts = async () => {
    const res = await apiGetRequest(`${apiUrl}/posts`)

    if (res.status === 200 && res.data) {
      setPosts(res.data)
    } else {
      console.log('error occurred while load posts data in dashboard')
    }
  }
  const getCommunities = async () => {
    const res = await apiGetRequest(`${apiUrl}/communities`)

    if (res.status === 200 && res.data) {
      setCommunities(res.data)
    } else {
      console.log('error occurred while load community data in dashboard')
    }
  }
  const handleLinkCommunity = (data: ICommunity) => {
    dispatch(setCommunity(data))
    dispatch(setCurrentBoardTab(5))
  }

  const handleLinkPost = (post?: IPost | undefined) => {
    if (post) {
      dispatch(setCurrentPost(post))
      dispatch(setCurrentBoardTab(6))
    } else {
      console.log('null')
    }
  }

  return (
    <PContainer.Main>
      <Container>
        <HoverBox flex="3" onClick={() => handleLinkPost(posts[0])}>
          <DetailedPost data={posts[0]} />
        </HoverBox>
        <HoverBox flex="2" onClick={() => handleLinkPost(posts[1])}>
          {/* <SimplePost data={posts[1]} /> */}
          <PostContainer img={`${(posts[1]?.media as IFile)?.path}`}>
            <Typography variant="h4">
              {truncateText(posts[1]?.body, 43) ||
                `How Atrium’s Tokenomics work and why you should ...`}
            </Typography>
          </PostContainer>
        </HoverBox>
        <Box flex="2">
          <PostContainer
            img={post2}
            children={<Typography>Members</Typography>}
          />
        </Box>
      </Container>
      <Container>
        <HoverBox flex="2" onClick={() => handleLinkPost(posts[2])}>
          <SimplePost data={posts[2]} />
        </HoverBox>
        <HoverBox flex="2" onClick={() => handleLinkPost(posts[3])}>
          <SimplePost data={posts[3]} />
        </HoverBox>
        <HoverBox
          flex="3"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          onClick={() => handleLinkPost()}
        >
          <HorizontalPostComp img={land1} onClick={handleLinkPost} />
          <HorizontalPostComp img={land2} onClick={handleLinkPost} />
          <HorizontalPostComp img={land3} onClick={handleLinkPost} />
        </HoverBox>
      </Container>
      <Container>
        {communities &&
          communities.length > 0 &&
          communities.slice(0, 3).map((item: ICommunity, key: number) => (
            <HoverBox
              width="100%"
              onClick={() => handleLinkCommunity(item)}
              key={key}
            >
              <PostContainer
                img={`${apiUrl}/files/${item?.logoUrl}`}
                height="350px"
              >
                <AText>{item.name}</AText>
              </PostContainer>
            </HoverBox>
          ))}
      </Container>
    </PContainer.Main>
  )
}
