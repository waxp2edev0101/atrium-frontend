import { Box, Typography } from '@mui/material'
// import { useEffect, useState } from 'react'

import { Button, TextField } from '../../../components'
// import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
// import { openSnack } from '../../../stores/AppStore'
import type { ITag, ICommunity } from '../../../types/model'

export const initialTags = [
  {
    active: false,
    description: '',
    name: 'developer',
  },
  {
    active: false,
    description: '',
    name: 'artist',
  },
  {
    active: false,
    description: '',
    name: 'project manager',
  },
  {
    active: false,
    description: '',
    name: 'designer',
  },
  {
    active: false,
    description: '',
    name: 'producer',
  },
  {
    active: false,
    description: '',
    name: 'team manager',
  },
  {
    active: false,
    description: '',
    name: 'founder',
  },
  {
    active: false,
    description: '',
    name: 'investor',
  },
]
export type TagProps = {
  name: string
  description?: string
  active?: boolean
}
export const TagContent = ({
  data,
  handleChange,
}: {
  data: ITag
  handleChange: AnyFunction
}) => {
  return (
    <Box mb="24px">
      <Button className="tag tag-large tag-active">{data.tag}</Button>
      <TextField
        multiline
        value={data?.description}
        className="rounded"
        name={data.tag}
        onChange={handleChange}
        sx={{
          '& textarea.MuiInputBase-input': {
            fontSize: '18px !important',
          },
          margin: '12px 0px',
        }}
        rows={2}
      />
    </Box>
  )
}
export const EditTags = ({
  // data,
  // setData,
  save,
}: {
  data: ICommunity
  setData: AnyFunction
  save: AnyFunction
}) => {
  // console.log('Profile data in edit tag page: ', profile)
  // const [userTagKeys, setUserTagKeys] = useState<string[]>([])
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   if (profile.tags && profile.tags.length > 0) {
  //     setUserTagKeys(profile.tags.map((item: ITag) => item.tag))
  //   } else setUserTagKeys([])
  // }, [profile.tags])

  // const removeTag = (tag: string) => {
  //   setProfile({
  //     ...profile,
  //     tags: profile.tags.filter((item: ITag) => item.tag !== tag),
  //   })
  // }
  // const addTag = (tag: string) => {
  //   if (profile.tags.length < 3)
  //     setProfile({
  //       ...profile,
  //       tags: [...profile.tags, { description: '', tag }],
  //     })
  //   else
  //     dispatch(
  //       openSnack({ content: 'Max tag size is 3', open: true, type: 'warning' })
  //     )
  // }
  // const handleTagClick = (tag: string) => {
  //   let isExist = userTagKeys.indexOf(tag) > -1

  //   if (isExist) removeTag(tag)
  //   else addTag(tag)
  // }
  // const handleTagChange = (tag: string, desc: string) => {
  //   setProfile({
  //     ...profile,
  //     tags: profile.tags.map((item: ITag) => {
  //       return item.tag === tag ? { description: desc, tag } : item
  //     }),
  //   })
  // }
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   handleTagChange(e.target.name, e.target.value)
  // }
  // useEffect(() => {
  //   console.log(tempTags)
  // }, [tempTags])
  // useEffect(() => {
  //   console.log(tags)
  // }, [tags])
  // const save = () => {
  //   setTags(tempTags)
  // }
  return (
    <Box>
      <Box>
        <Typography variant="h3">Choose Community Tags</Typography>
        <Typography variant="body2" mt="16px">
          Select the 3 tags that best represent you, then write a bit about each
          one.{' '}
        </Typography>
      </Box>
      <Box
        p="24px 80px"
        sx={{ '& > div, & > div > div': { paddingY: '24px' } }}
      >
        <Box display="flex" gap="12px">
          {initialTags.map((item: TagProps, key: number) => (
            <Box key={key}>
              <Button
              // className={`tag tag-large ${
              // userTagKeys.indexOf(item.name) > -1 ? 'tag-active' : ''
              // }`}
              // onClick={() => updateTag(item.name, 'active', !item.active)}
              // onClick={() => handleTagClick(item.name)}
              >
                {/* {item.name} */}
              </Button>
            </Box>
          ))}
        </Box>
        <Box mt="24px" borderTop={`1px solid ${palette.text.disabled}`}>
          <Box>
            <Typography variant="h4">Tag Descriptions</Typography>
            <Typography variant="body2" mt="12px">
              Write 2-3 sentences about why each of these apply to you.{' '}
            </Typography>
          </Box>
          <Box>
            {/* {profile.tags &&
              profile.tags.length > 0 &&
              profile.tags.map((item: ITag, key: number) => (
                <TagContent data={item} handleChange={handleChange} key={key} />
              ))} */}
            {/* {tempTags.map(
              (item: TagProps, key: number) =>
                item.active && (
                  <TagContent
                    tag={item}
                    key={key}
                    update={(value: string) =>
                      updateTag(item.name, 'description', value)
                    }
                  />
                )
            )} */}
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end">
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
