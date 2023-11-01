import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import { Button, EmptyBox } from '../../../components'
import type { ITag } from '../../../types/model'
import { Community as Panel } from '../styled'

export const Tags = ({ data }: { data: ITag[] }) => {
  const [currentTag, setCurrentTag] = useState<ITag | null>(
    data && data.length ? data[0] : null
  )

  useEffect(() => {
    if (data && data.length) handleClick(data[0])
  }, [data])

  const handleClick = (tag: ITag) => {
    setCurrentTag(tag)
  }
  return (
    <Panel mt="24px">
      <Box display="flex" gap="64px">
        <Typography variant="h2">tags</Typography>
        <Box display="flex" gap="24px" py="5px">
          {data && data.length
            ? data.map((item: ITag, key: number) => (
                <Button
                  key={key}
                  className={`tag tag-large ${
                    item.tag === currentTag?.tag ? 'tag-active' : ''
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item.tag}
                </Button>
              ))
            : null}
        </Box>
      </Box>
      {data && data.length ? (
        <Box pt="24px">
          <Typography variant="body1">{currentTag?.description}</Typography>
        </Box>
      ) : (
        <EmptyBox>No Tags</EmptyBox>
      )}
    </Panel>
  )
}
