import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import type { TAlert, TSnack } from '../../../stores/AppStore'
import { openSnack } from '../../../stores/AppStore'
import { apiPostRequest, apiUrl, isValidUrl } from '../../../utils'
import * as Container from '../styled'

import { ValidationBox, PostImage, PostSection, PostLink, PostText } from './'

export type TPostContentType = 'section' | 'text' | 'image' | 'link'
export type TPostContent = {
  type: TPostContentType
  value: string | File
}
export interface IDevPost {
  title: string
  contents: TPostContent[]
}

export const ArticleBuilder = () => {
  const dispatch = useAppDispatch()

  const [data, setData] = useState<IDevPost>({
    contents: [],
    title: '',
  } as IDevPost)

  useEffect(() => {
    console.log('data changed ', data)
  }, [data])
  const handleSnack = (type: TAlert, content: string) => {
    const payload: TSnack = { content, open: true, type }
    dispatch(openSnack(payload))
  }
  type ChangeEvent = React.ChangeEvent<HTMLInputElement>
  const handleChange = (event: ChangeEvent | File | null, index?: number) => {
    const isNull = event === null
    const isFile = !isNull && (event as File).name !== undefined

    const name = isFile || isNull ? 'image' : (event as ChangeEvent).target.name
    const value = isNull
      ? ''
      : isFile
      ? event
      : (event as ChangeEvent).target.value
    console.log(name, value, index)
    if (name === 'title' && index === undefined)
      setData({ contents: data.contents, title: value as string })
    else if (index || index === 0) {
      setData({
        contents: [
          ...data.contents.slice(0, index),
          {
            type: name as TPostContentType,
            value: isFile ? (value as File) : (value as string),
          },
          ...data.contents.slice(index + 1),
        ],
        title: data.title,
      })
    }
  }
  const getImageFile = async () => {
    return new Promise<File>((resolve, reject) => {
      if (data.contents?.length > 0) {
        data.contents.forEach((item: TPostContent) => {
          if (item.type === 'image') {
            resolve(item.value as File)
          }
        })
      }
      reject()
    })
  }
  const getBody = async () =>
    new Promise((resolve, reject) => {
      if (data.contents?.length > 0) {
        data.contents.forEach((item: TPostContent) => {
          if (item.type === 'text') {
            resolve(item.value as string)
          }
        })
      }
      reject()
    })
  const uploadImage = async (file: File) => {
    return await axios.post(
      `${apiUrl}/file/upload`,
      { image: file },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  }
  const uploadPost = async () => {
    if (!data.title || !data.contents || data.contents.length === 0) {
      // console.log('input data correctly')
      handleSnack('warning', 'Type data exactly')
      return
    }
    const file = await getImageFile()
    // console.log(Boolean(file))
    // let fileUploadResponse = {}
    let media = ''
    if (file) {
      const res = await uploadImage(file)

      if (res.status === 200 && res.data.status && res.data.file) {
        // setPost({ ...post, media: res?.data.file._id })
        media = res?.data.file._id
      }
    }
    const body = await getBody()
    const res = await apiPostRequest(`${apiUrl}/posts`, {
      body,
      media,
      title: data.title,
    })
    if (res.status === 200) {
      clearData()
      handleSnack('success', 'Succeed to create post')
    } else {
      // console.log('it seems like not going well')
      handleSnack('error', 'Error occurred')
    }
  }
  const clearData = () =>
    setData({
      contents: [],
      title: '',
    } as IDevPost)

  const validate = (content: TPostContent) => {
    // return true
    if (content.type === 'text' || content.type === 'section') {
      return (
        content.value !== undefined && (content.value as string).length !== 0
      )
    } else if (content.type === 'link') {
      return isValidUrl(content.value)
    } else if (content.type === 'image') {
      return false
    }
  }
  const getComponent = (item: TPostContent, index: number) => {
    const props = { data: item, handleChange, index }

    switch (item.type) {
      case 'image': {
        return <PostImage {...props} />
      }
      case 'link': {
        return <PostLink {...props} />
      }
      case 'text': {
        return <PostText {...props} />
      }
      case 'section': {
        return <PostSection {...props} />
      }
    }
  }
  const addItem = (type: TPostContentType) => {
    setData({ ...data, contents: [...data.contents, { type, value: '' }] })
  }
  return (
    <Container.Main>
      <Box py={6} px={30}>
        <ValidationBox valid={Boolean(data.title) && data.title.length !== 0}>
          <TextField
            value={data.title}
            name={`title`}
            onChange={(e: ChangeEvent) => handleChange(e)}
            variant="standard"
            sx={{ width: '100%' }}
          />
        </ValidationBox>
        {data.contents?.map((item: TPostContent, key: number) => (
          <ValidationBox valid={validate(item)} key={key}>
            {getComponent(item, key)}
          </ValidationBox>
        ))}
        <Box>
          <Box mt="36px">
            <Stack
              direction="row"
              spacing={2}
              sx={{
                '& > button': {
                  fontSize: 30,
                  py: 2,
                  width: '100%',
                },
                py: 3,
              }}
            >
              <Button variant="outlined" onClick={() => addItem('section')}>
                Section
              </Button>
              <Button variant="outlined" onClick={() => addItem('text')}>
                Text
              </Button>
              <Button variant="outlined" onClick={() => addItem('image')}>
                Image
              </Button>
              <Button variant="outlined" onClick={() => addItem('link')}>
                Link
              </Button>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ mt: '24px', textAlign: 'center' }}>
              Once you post, you can’t edit
            </Typography>
            <Box mt="12px" textAlign="center">
              <Button
                onClick={uploadPost}
                variant="outlined"
                sx={{
                  background: '#E90026',
                  border: 'none',
                  color: palette.text.primary,
                  fontSize: '36px',
                  padding: '30px 150px',
                }}
              >
                upload
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container.Main>
  )
}
