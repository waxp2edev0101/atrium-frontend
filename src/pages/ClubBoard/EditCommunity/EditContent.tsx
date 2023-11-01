import { Box, Typography, Collapse } from '@mui/material'
import React, { useState } from 'react'

import project6 from '../../../assets/images/project-6.png'
import { Button, TextField } from '../../../components'
import { palette } from '../../../MuiTheme'
import type {
  // IUser,
  ICommunity,
  IPost,
  IComment,
  IFile,
} from '../../../types/model'
import { calculatePastTime } from '../../../utils'
import { Reactions } from '../Dashboard'

const url = process.env.VITE_API_URL || 'http://localhost:2567'

const CaptionText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="caption" sx={{ fontSize: '14px' }} py="5px" flex="2">
      {children}
    </Typography>
  )
}
const TagButton = ({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) => {
  return (
    <Button className="primary active tag tag-small" color={color}>
      {children}
    </Button>
  )
}
export const CommunityCard = ({ data }: { data?: ICommunity }) => {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    if (!selected) setSelected(true)
  }

  return (
    <Box width="470px" mt="32px">
      <Box
        display="flex"
        gap="16px"
        p="16px"
        border={`1px solid ${
          selected ? palette.secondary.light : palette.text.primary
        }`}
        onClick={handleClick}
      >
        <Box width="120px !important" height="120px">
          <img src={project6} alt="" width="100%" height="100%" />
        </Box>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="h5">
            {data?.name || 'Antisocial Ape Club'}
          </Typography>
          <Box display="flex" gap="8px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <CaptionText>roles</CaptionText>
              <CaptionText>NFTs Owned</CaptionText>
              <CaptionText>joined</CaptionText>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box display="flex" gap="8px">
                <Box>
                  <TagButton color="#FF75CD">whitelisted</TagButton>
                </Box>
                <Box>
                  <TagButton color="#90E487">OG Member</TagButton>
                </Box>
              </Box>
              <Typography variant="h6" flex="3">
                0
              </Typography>
              <Typography variant="h6" flex="3">
                august, 2nd 2022
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box height="46px">
        <Collapse in={selected} orientation="vertical">
          <Box width="100%" p="8px" textAlign="center">
            <Button
              className="primary active"
              color={palette.secondary.light}
              onClick={() => setSelected(false)}
            >
              unselect
            </Button>
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}

export const PostCard = ({
  data,
  selected,
}: {
  data: IPost
  selected?: boolean
}) => {
  return (
    <Box
      p="16px"
      border={`1px solid ${
        selected ? palette.secondary.light : palette.text.primary
      }`}
    >
      <img
        src={url + '/files/' + (data.media as IFile)?.path}
        alt=""
        width="100%"
        height="180px"
      />
      <Box py="12px">
        <Typography variant="h6">
          {/* Why ASAC has taken over HavenSwap and it’s plan for the future */}
          {data.body}
        </Typography>
        <Box mt="12px">
          <Reactions />
        </Box>
        <Typography mt="12px" variant="caption" sx={{ fontSize: '12px' }}>
          {/* posted 1 day ago */}
          {calculatePastTime(data.createdAt)}
        </Typography>
      </Box>
    </Box>
  )
}
export const CommentCard = ({
  data,
  selected,
}: {
  data?: IComment
  selected?: boolean
}) => {
  return (
    <Box
      border={`1px solid ${
        selected ? palette.secondary.light : palette.text.primary
      }`}
      p="12px"
    >
      <Box display="flex" gap="48px">
        <Box display="flex" gap="12px">
          <Box width="36px" height="36px">
            <img src={data?.author.avatar} width="100%" height="100%" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="h6" sx={{ fontSize: 14 }}>
              {/* Hades */}
              {data?.author.username}
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: 12 }}
              textTransform="lowercase"
            >
              {/* 12 hours ago */}
              {calculatePastTime(data?.createdAt)}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="caption" textTransform="lowercase">
            {data?.body}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export const EditContent = ({
  // data,
  // setData,
  // updateProfile,
  save,
}: {
  data?: ICommunity
  setData?: AnyFunction
  // updateProfile: AnyFunction
  save?: AnyFunction
}) => {
  // const chunkSize = 2
  // const [communities, setComunities] = useState<ICommunity[]>([])
  // const [posts, setPosts] = useState<IPost[]>([])
  // // const [featuredPost, setFeaturedPost] = useState<IPost>({} as IPost)
  // // const [featuredPostId, setFeaturedPostId] = useState('')
  // const [featuredPostComments, setFeaturedPostComments] = useState<IComment[]>(
  //   []
  // )
  // const [featuredComment, setFeaturedComment] = useState<IComment>(
  //   {} as IComment
  // )

  // // const [communityGroup, setCommunityGroup] = useState<ICommunity[][]>([[]])

  // useEffect(() => {
  //   const init = async () => {
  //     // GET POSTS

  //     const res = await apiGetRequest(`${url}/posts`)

  //     if (res.status === 200 && res.data) {
  //       setPosts(res.data)
  //     } else {
  //       console.log('Failed to load posts')
  //     }
  //     // GET COMMUNITIES
  //   }

  //   init()
  // }, [])
  // // useEffect(() => {
  // //   if (post.length > 0) {
  // //     posts.forEach((item: IPost) => {
  // //      const res = await apiGetRequest(`${url}/${item._id}/comment`)

  // //      if (res.status === 200 && res.data) {
  // //         setCo
  // //      } else {
  // //       console.log('Failed to load comments for post ', item._id)
  // //      }
  // //     })
  // //   }
  // // }, [posts])
  // useEffect(() => {
  //   // console.log(profile.featuredPost)
  //   if (
  //     data.featuredPost &&
  //     data.featuredPost[0] &&
  //     data.featuredPost[0]._id
  //   )
  //     getComments(data.featuredPost[0]._id)
  // }, [data.featuredPost])

  // // useEffect(() => {
  // //   const length = communities.length
  // //   let _communityGroup = [] as ICommunity[][]
  // //   for (let i = 0; i < length; i += 2) {
  // //     _communityGroup.push(communities.slice(i, i + chunkSize))
  // //   }
  // //   setCommunityGroup(_communityGroup)
  // // }, [communities])
  // // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // //   updateProfile<string>(e.target.name, e.target.value)
  // // }
  // const getComments = async (id: string) => {
  //   const res = await apiGetRequest(`${url}/posts/${id}/comment`)

  //   if (res.status === 200 && res.data) {
  //     setFeaturedPostComments(res.data.comments)
  //   } else {
  //     console.log('Failed to load comments for post ', id)
  //   }
  // }
  // const setBlurp = (blurp: string) => {
  //   setProfile({ ...profile, blurp })
  // }
  // // const addFavoriteCommunity = (id: string) => {
  // //   console.log('Add favorite community')
  // //   if (profile.favoriteCommunities.length < 3) {
  // //     console.log('Add')
  // //   }
  // // }
  // // const removeFavoriteCommunity = (id: string) => {
  // //   console.log('Remvove favorite community')
  // // }
  // // const setFeaturedPost = (post?: IPost) => {
  // //   if (post) {
  // //     setProfile({ ...profile, featuredPost: [post] })
  // //   } else {
  // //     setProfile({ ...profile, featuredPost: [] })
  // //   }
  // // }
  // // const setFeaturedComment = (id: string) => {
  // //   console.log('Set featured post')
  // // }

  return (
    <Box>
      <Typography variant="h3">featured content</Typography>
      <Typography variant="body2" pt="16px">
        Edit content featured on your profile.{' '}
      </Typography>
      <Box p="60px 120px">
        <Typography variant="h4">blurp</Typography>
        <Typography mt="8px" variant="body2">
          Write an annoucement that appears next to your Profile Image. 64
          Charaters max.{' '}
        </Typography>
        <Box py={3}>
          <TextField
            name="blurp"
            // variant="primary"
            className="rounded"
            // value={profile.blurp}
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   setBlurp(e.target.value)
            // }
          />
        </Box>
        <Box py="32px" display="flex" flexDirection="column">
          <Typography variant="h4">Projects</Typography>
          <Typography mt="8px" variant="body2">
            Select up to 3 projects to feature.{' '}
          </Typography>
          <Box sx={{ overflowX: 'scroll' }} p="32px 0px">
            <Box display="flex" gap="24px">
              {/* {communityGroup && communityGroup.length ? (
                communityGroup.map((group: ICommunity[], key: number) => (
                  <Box key={key}>
                    {group.map((item: ICommunity, key: number) => (
                      <CommunityCard key={key} data={item} />
                    ))}
                  </Box>
                ))
              ) : (
                <EmptyBox>No Community</EmptyBox>
              )} */}
              <Box>
                <CommunityCard />
                <CommunityCard />
              </Box>
              <Box>
                <CommunityCard />
                <CommunityCard />
              </Box>
              <Box>
                <CommunityCard />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4">Featured Post</Typography>
          <Typography mt="8px" variant="body2">
            Select 1 post to feature.
          </Typography>
          <Box
            display="flex"
            gap="32px"
            my="32px"
            sx={{
              overflowX: 'scroll',
              pb: 3,
            }}
          >
            {/* {posts && posts.length > 0 ? (
              posts.map((item: IPost, key: number) => {
                const fpId =
                  profile.featuredPost[0]._id ||
                  (profile.featuredPost[0] as any)
                return (
                  <Box
                    sx={{ minWidth: 200 }}
                    key={key}
                    onClick={() => setFeaturedPost(item)}
                  >
                    <PostCard
                      data={item}
                      key={key}
                      selected={fpId === item._id}
                    />
                  </Box>
                )
              })
            ) : (
              <EmptyBox>No Posts</EmptyBox>
            )} */}
          </Box>
        </Box>
        <Box my="32px">
          <Typography variant="h4">Featured Post Comment</Typography>
          <Typography mt="8px" variant="body2">
            Select 1 comment from your featured post.
          </Typography>
          <Box
            mt="50px"
            p="0px 32px 0px 114px"
            sx={{
              maxHeight: 445,
              overflowY: 'scroll',
            }}
          >
            {/* {featuredPostComments && featuredPostComments.length > 0 ? (
              featuredPostComments.map((item: IComment, key: number) => (
                <Box mb={2} key={key} onClick={() => setFeaturedComment(item)}>
                  <CommentCard
                    data={item}
                    selected={featuredComment._id === item._id}
                  />
                </Box>
              ))
            ) : (
              <EmptyBox>No Comments</EmptyBox>
            )} */}
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" mt="120px">
        <Button
          className="primary active medium"
          color={palette.secondary.light}
          onClick={save}
        >
          save changes
        </Button>
      </Box>
    </Box>
  )
}
