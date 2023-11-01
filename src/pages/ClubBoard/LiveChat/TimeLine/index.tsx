import Box from '@mui/material/Box'
import Spinner from '@mui/material/CircularProgress'
import React, { useEffect, useState } from 'react'

import Comment from './Comment'

const TimeLine: React.FC = () => {
  const [comments, setComments] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetcher(1000).then((data) => {
      setComments(data)
      setLoading(false)
    })
  }, [])

  if (loading)
    return (
      <Box sx={{ display: 'flex', itemsAlign: 'center', padding: '50px' }}>
        <Spinner />
      </Box>
    )

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        scrollbarColor: '#1a237e',
      }}
    >
      {comments.length &&
        comments.map((data, idx) => {
          return <Comment comment={data.comment} key={idx} />
        })}
    </Box>
  )
}

export default TimeLine

const fetcher = (delay: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(comments), delay))
}

const comments = [
  {
    comment:
      '          Word of the Day. Working against full stack and smart contract, I am\n' +
      '          confident, well versed and responsible for my work. through what’s\n' +
      '          involved reproducing a classic halftone style printing.',
  },
  {
    comment:
      '          Word of the Day. Working against full stack and smart contract, I am\n' +
      '          confident, well versed and responsible for my work. through what’s\n' +
      '          involved reproducing a classic halftone style printing.',
  },
  {
    comment:
      '          Word of the Day. Working against full stack and smart contract, I am\n' +
      '          confident, well versed and responsible for my work. through what’s\n' +
      '          involved reproducing a classic halftone style printing.',
  },
  {
    comment:
      '          Word of the Day. Working against full stack and smart contract, I am\n' +
      '          confident, well versed and responsible for my work. through what’s\n' +
      '          involved reproducing a classic halftone style printing.',
  },
  {
    comment:
      '          Word of the Day. Working against full stack and smart contract, I am\n' +
      '          confident, well versed and responsible for my work. through what’s\n' +
      '          involved reproducing a classic halftone style printing.',
  },
]
