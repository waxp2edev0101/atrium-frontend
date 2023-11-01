import { Box } from '@mui/material'
import { useState, useEffect } from 'react'

import { EmptyBox } from '../../../components'
import type { IPost } from '../../../types/model'
import { apiGetRequest } from '../../../utils'
import bg from '../images/profile-landing-image.png'
import { ModalContainer } from '../styled'

import { PostItem } from './PostItem'

export const Post = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    let isMounted = true
    const init = async () => {
      const res = await apiGetRequest(`${process.env.VITE_API_URL}/posts`)

      if (res.status === 200 && res.data) {
        // console.log(res.data)
        if (isMounted) setPosts(res.data)
        // else console.log('Not mounted yet')
      } else {
        console.log('Error occured while load posts: ', res)
      }
    }

    init()

    // return () => {
    //   isMounted = false
    // }
  }, [])

  return (
    <ModalContainer>
      <Box>
        <img src={bg} alt="" width="100%" />
      </Box>
      <Box p="60px 180px">
        {posts ? (
          <>
            {posts.map((item: IPost, key: number) => (
              <Box p="24px" key={key}>
                <PostItem data={item} />
              </Box>
            ))}
          </>
        ) : (
          <EmptyBox>No Posts</EmptyBox>
        )}
      </Box>
    </ModalContainer>
  )
}
