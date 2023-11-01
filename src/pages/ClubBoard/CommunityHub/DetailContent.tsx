import { Box, Typography } from '@mui/material'

export const DetailContent = () => {
  const Item = ({
    category,
    value,
  }: {
    category: string
    value: React.ReactNode
  }) => {
    return (
      <Box p="4px 12px 4px 0px">
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '15px',
            textTransform: 'capitalize',
          }}
        >
          {category}
        </Typography>
        <Typography variant="body2">{value}</Typography>
      </Box>
    )
  }
  return (
    <Box display="flex">
      <Item category="supply" value="3333" />
      <Item category="listed" value="258" />
      <Item category="floor price" value="20 Ⓝ" />
      <Item category="Vol. All Time" value="93,420 Ⓝ" />
    </Box>
  )
}
