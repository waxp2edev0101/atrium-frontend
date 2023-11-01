import { Box, Button } from '@mui/material'
import React, { useState, useRef, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { useAppDispatch } from '../../../hooks'
import { openSnack } from '../../../stores/AppStore'

import type { TPostContent } from './ArticleBuilder'

export const PostImage = ({
  data,
  index,
  handleChange,
}: {
  data: TPostContent
  index: number
  handleChange: AnyFunction
}) => {
  const dispatch = useAppDispatch()
  const [image, setImage] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (files: File[]) => {
    const supportedFiles = ['image/png', 'image/jpeg', 'image/gif']
    if (files && files.length) {
      const _file = files[0]
      if (supportedFiles.indexOf(_file.type) > -1) {
        let fr = new FileReader()
        fr.onload = function () {
          setImage(fr.result as string)
        }
        fr.readAsDataURL(_file)
        // setFile(_file)
        handleChange(_file, index)
      } else {
        // console.log('unsupported file')
        dispatch(
          openSnack({
            content: 'Unsupported file',
            open: true,
            type: 'warning',
          })
        )
      }
    } else {
      // console.log('file not exist')
      dispatch(
        openSnack({ content: 'File not exist', open: true, type: 'warning' })
      )
    }
  }
  const handleDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles)
    handleFileChange(acceptedFiles)
  }, [])
  const clear = () => {
    setImage('')
    handleChange(null, index)
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  })
  return (
    <Box>
      {/* <Input
        inputRef={fileInputRef}
        type="file"
        hidden
        onChange={handleFileChange}
        sx={{ visibility: 'hidden' }}
      /> */}
      {data.value && image ? (
        <Box position="relative">
          <img src={image} alt="" width="100%" />
          <Box
            sx={{ left: '12px', position: 'absolute', top: '12px' }}
            onClick={() => clear()}
          >
            close
          </Box>
        </Box>
      ) : (
        <div {...getRootProps()}>
          <input {...getInputProps()} ref={fileInputRef} type="file" hidden />

          <Button
            variant="outlined"
            sx={{ fontSize: '36px', py: 6, width: '100%' }}
          >
            {isDragActive ? (
              <>Drop the files here ...</>
            ) : (
              <>+ Add image / gif</>
            )}
          </Button>
        </div>
      )}
    </Box>
  )
}
