// import type { TypographyProps } from '@mui/material'
import { Typography, styled } from '@mui/material'

// interface ITypography extends TypographyProps {
//   maxSize?: number
// }
// export const TruncateText = styled(Typography)<ITypography>(({ maxSize }) => ({
export const TruncateText = styled(Typography)(() => ({
  // whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))
