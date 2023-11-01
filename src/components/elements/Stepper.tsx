import { Box } from '@mui/material'

import { palette } from '../../MuiTheme'

const Stepper = ({ length, step }: { length: number; step: number }) => {
  return (
    <Box display="flex" gap="36px" height="4px" width="560px">
      {new Array(length).fill(1).map((_, key: number) => (
        <Box
          key={key}
          width="100%"
          height="100%"
          sx={{
            background: `${key < step ? palette.grey[100] : palette.grey[300]}`,
          }}
        />
      ))}
    </Box>
  )
}

export { Stepper }
