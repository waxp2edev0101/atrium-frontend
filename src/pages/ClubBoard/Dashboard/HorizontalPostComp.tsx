import { Box, Typography } from '@mui/material'

import type { IUser } from '../../../types/model'

import { User } from './User'

export const HorizontalPostComp = ({
  img,
  onClick,
}: {
  img: string
  onClick: AnyFunction
}) => {
  return (
    <Box position="relative" height="150px" onClick={onClick}>
      <img src={img} alt="" width="100%" height="100%" />
      <Box
        position="absolute"
        top="0px"
        display="flex"
        gap="24px"
        p="12px 24px"
      >
        <Typography
          sx={{
            fontFamily: 'Fractul Alt',
            fontSize: '32px',
            fontWeight: '600',
            letterSpacing: '0em',
            lineHeight: '34px',
            textAlign: 'left',
          }}
        >
          I will win your land and your girl
        </Typography>
        <User data={{ accountId: 'swiftyyy' } as IUser} />
      </Box>
    </Box>
  )
}
