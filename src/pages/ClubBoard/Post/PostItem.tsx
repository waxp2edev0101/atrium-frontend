import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

// import postImage from '../../../assets/images/post-image.png'
import { AtButton } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { setCurrentPost } from '../../../stores/AppStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { IFile, IPost } from '../../../types/model'
import { apiGetRequest, apiPostRequest } from '../../../utils'
import { convert2LongDate } from '../../../utils/utils'

import { Comments } from './Comments'

export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <AtButton
      variant="small"
      text={<Typography variant="caption">{children}</Typography>}
    />
  )
}

const url = process.env.VITE_API_URL || 'localhost:2567'

export const PostItem = ({ data }: { data: IPost }) => {
  const dispatch = useAppDispatch()
  // console.log('Post data: ', data)
  const expand = false
  const [post, setPost] = useState<IPost>(data)

  const me = useAppSelector((state) => state.auth.user)

  const getComments = async () => {
    const res = await apiGetRequest(`${url}/posts/${post._id}/comment`)
    // console.log('Got comments: ', res.data)
    if (res.status === 200 && res.data && res.data.comments) {
      setPost({ ...post, comments: res.data.comments })
    } else {
      console.log('Something went wrong while load comments for post')
    }
  }
  useEffect(() => {
    if (!post) return

    if (post.comments.length > 0 && typeof post.comments[0] === 'string') {
      getComments()
    }
  }, [post])
  const createComment = async (body: string) => {
    const id = data._id
    const res = await apiPostRequest(`${url}/posts/${id}/comment`, {
      body,
    })

    if (res.status === 200 && res.data) {
      console.log('New comment: ', res.data)
      setPost({
        ...post,
        comments: [...post.comments, { ...res.data, author: me }],
      })
    } else {
      console.log('Something went wrong while create comment')
    }
  }
  const handleClick = (post: IPost) => {
    dispatch(setCurrentPost(post))
    dispatch(setCurrentBoardTab(6))
  }
  return (
    <Box sx={{ border: `1px solid ${palette.text.primary}`, padding: '36px' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        onClick={() => handleClick(data)}
      >
        <Typography variant="h2" sx={{ fontSize: '60px', maxWidth: '640px' }}>
          {post.title}
        </Typography>
        <Box>
          <Typography
            variant="body2"
            sx={{ fontSize: '20px', textTransform: 'uppercase' }}
          >
            {convert2LongDate(post.createdAt)}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: `${expand ? 'block' : 'none'}` }}>
        <Box display="flex" gap="24px" pt="48px">
          <Tag>stopify</Tag>
          <Tag>atrium</Tag>
          <Tag>trending news</Tag>
          <Tag>integrations</Tag>
        </Box>
        <Box p="24px 0px">
          <img
            src={`${process.env.VITE_API_URL}/files/${
              (post.media as IFile)?.path
            }`}
            alt=""
            width="100%"
          />
        </Box>
        <Typography variant="body1">{post.body}</Typography>
      </Box>
      <Comments
        data={post.comments.slice(0, 2)}
        createComment={createComment}
        preview
      />
    </Box>
  )
}
