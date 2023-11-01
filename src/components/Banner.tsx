import { Box } from '@mui/material'

export const Banner = ({ img }: { img?: string }) => {
  return (
    <Box position="relative">
      <Box>
        <img src={img} alt="" width="100%" height="250px" />
      </Box>
    </Box>
  )
}
