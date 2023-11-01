import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import { AText, Button, EmptyBox } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { IFile, IPost } from '../../../types/model'
import { apiGetRequest } from '../../../utils'
import { Reactions } from '../Dashboard'
import { Community as Container } from '../styled'
import { PostContainer } from '../UserProfile'

import { MessageItem } from './'

export const getPost = async (id: string) => {
  if (!id) {
    console.log('Id have not be null to get post data.')
    return
  }
  return await apiGetRequest(
    `${process.env.VITE_API_URL || 'http://localhost:2567'}/posts/${id}`
  )
}
export const FeaturedPost = ({
  data,
  height,
}: {
  data?: null | string | IPost
  height?: string
}) => {
  const [post, setPost] = useState<IPost>({} as IPost)

  useEffect(() => {
    const init = async () => {
      if (typeof data === 'string') {
        const res = await getPost(data)
        if (res.data) setPost(res.data)
      } else if (typeof data === undefined || data === null) {
        console.log('Post data is null')
      } else if (typeof data === 'object' && data !== null) {
        setPost(data)
      }
    }
    init()
  }, [data])
  return (
    <Container height="100%">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h2">featured post</Typography>
        <Box>
          <Button className="primary outlined" color={palette.secondary.light}>
            view all posts
          </Button>
        </Box>
      </Box>
      <Box pt="40px">
        {post ? (
          <>
            <PostContainer
              img={(post.media as IFile)?.path}
              height={height ? height : ''}
            >
              <Box display="flex" gap="24px">
                <Box>
                  <AText>{post.title}</AText>
                  <AText className="disabled">{post.body} </AText>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="end">
                  <Reactions />
                </Box>
              </Box>
            </PostContainer>
            <Box pt="16px">
              <MessageItem user={post.author} message={{}} />
            </Box>
          </>
        ) : (
          <EmptyBox>No Featured Post</EmptyBox>
        )}
      </Box>
    </Container>
  )
}
