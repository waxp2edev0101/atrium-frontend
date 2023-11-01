import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Button } from '@mui/material'
import React from 'react'

import muiTheme from '../../../../MuiTheme'

const EditButton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<OpenInNewIcon sx={{ color: muiTheme.palette.icon.dark }} />}
      sx={{
        borderColor: muiTheme.palette.icon.dark,
        color: muiTheme.palette.icon.dark,
        fontWeight: 'bold',
      }}
    >
      Edit Profile
    </Button>
  )
}

export default EditButton
