import { Box, Typography } from '@mui/material'

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'Fractul Alt',
          fontSize: '36px',
          fontWeight: '600',
          lineHeight: '105%',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}
