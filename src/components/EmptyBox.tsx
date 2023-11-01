import { Box, Typography } from '@mui/material'

export const EmptyBox = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box
      p="24px"
      display="flex"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Typography variant="h5">{children}</Typography>
    </Box>
  )
}
