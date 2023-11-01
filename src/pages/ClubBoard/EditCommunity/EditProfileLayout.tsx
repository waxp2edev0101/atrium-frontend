import { Box, Typography } from '@mui/material'
import React from 'react'

import { Button } from '../../../components'
import { palette } from '../../../MuiTheme'

export const EditProfileLayout = ({
  title,
  subtitle,
  children,
  save,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  save?: AnyFunction
}) => {
  return (
    <Box>
      <Box>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body2" mt="16px">
          {subtitle}
        </Typography>
      </Box>
      <Box p="24px 80px">{children}</Box>
      <Box display="flex" justifyContent="end" mt="64px">
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
