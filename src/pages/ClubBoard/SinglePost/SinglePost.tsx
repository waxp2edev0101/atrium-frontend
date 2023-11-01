import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { Button, Banner } from '../../../components'
import { useAppSelector } from '../../../hooks'
import type { IComment, IPost } from '../../../types/model'
import { convert2LongDate } from '../../../utils'
import { apiUrl, apiGetRequest, apiPostRequest } from '../../../utils/axios'
import bg from '../images/profile-landing-image.png'
import { Comments } from '../Post/Comments'
import * as PContainer from '../styled'

import { Container } from './styled'

const SinglePost = () => {
  const data = useAppSelector((state) => state.app.currentPost)
  const me = useAppSelector((state) => state.auth.user)
  console.log(data)
  const [post, setPost] = useState<IPost>({} as IPost)

  type GetComments = (postId: string) => Promise<IComment[] | null>
  const getComments: GetComments = async (postId: string) => {
    const res = await apiGetRequest(`${apiUrl}/posts/${postId}/comment/`)

    return res?.data.comments
  }
  useEffect(() => {
    const updateState = async () => {
      if (
        data.comments &&
        data.comments.length &&
        typeof data.comments[0] === 'string'
      ) {
        const _comments = await getComments(data._id)
        console.log(_comments)
        if (_comments) {
          setPost({ ...data, comments: _comments })
          return
        }

        setPost(data)
        return
      }
      setPost(data)
    }
    updateState()
  }, [data])

  const createComment = async (body: string) => {
    const id = data._id
    const res = await apiPostRequest(`${apiUrl}/posts/${id}/comment`, {
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

  return (
    <PContainer.Main>
      <Banner img={bg} />
      <Box>
        <Box sx={{ padding: '0px 180px' }}>
          <Box>
            <Box sx={{ p: '32px' }}>
              <Box display="flex" justifyContent={'space-between'}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: 60, textTransform: 'capitalize' }}
                >
                  {data?.title}
                </Typography>
                <Typography variant="body2" pt={1} textTransform="uppercase">
                  //{convert2LongDate(data?.createdAt)}
                </Typography>
              </Box>
              <Box
                sx={{
                  '& button': {
                    fontFamily: 'Andale Mono Regular',
                    fontWeight: 100,
                    textTransform: 'uppercase',
                  },
                  display: 'flex',
                  gap: '12px',
                  padding: '36px 0px',
                }}
              >
                <Button className="primary active">spotify</Button>
                <Button className="primary active">atrium</Button>
                <Button className="primary active">trending news</Button>
                <Button className="primary active">integrations</Button>
              </Box>
            </Box>
            <Box></Box>
          </Box>
          <Container>
            <img
              src={
                typeof data?.media !== 'string'
                  ? apiUrl + '/files/' + data?.media?.path
                  : ''
              }
              alt=""
              width="100%"
            />
            <Typography variant="body1" py={2}>
              {data?.body}
            </Typography>
          </Container>
          <Box>
            {
              <Comments
                data={post.comments}
                createComment={createComment}
                preview={false}
              />
            }
          </Box>
        </Box>
      </Box>
    </PContainer.Main>
  )
}

export { SinglePost }
