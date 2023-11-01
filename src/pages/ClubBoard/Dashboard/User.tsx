import { Box, Typography } from '@mui/material'

import type { IUser } from '../../../types/model'
// import { apiUrl } from '../../../utils'
import avatar from '../images/profile-avatar.png'

export const User = ({ data }: { data?: IUser }) => {
  return (
    <Box display="flex" gap={1}>
      <Box width="24px" height="24px">
        <img
          src={data ? `${data?.avatar}` : avatar}
          alt=""
          width="100%"
          height="100%"
          style={{ borderRadius: 24 }}
        />
      </Box>
      <Typography variant="h6">{data?.accountId}</Typography>
    </Box>
  )
}
