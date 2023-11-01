import { TextField } from '@mui/material'

import type { TPostContent } from './ArticleBuilder'

export const PostSection = ({
  data,
  index,
  handleChange,
}: {
  data: TPostContent
  index: number
  handleChange: AnyFunction
}) => (
  <TextField
    value={data.value}
    name={data.type}
    onChange={(e) => handleChange(e, index)}
    variant="standard"
    sx={{ width: '100%' }}
  />
)
