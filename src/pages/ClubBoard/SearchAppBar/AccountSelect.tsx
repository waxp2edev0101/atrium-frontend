import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import type { SelectChangeEvent } from '@mui/material/Select'
import Select from '@mui/material/Select'
import styled from '@mui/material/styles/styled'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import { useAppSelector } from '../../../hooks'
import muiTheme from '../../../MuiTheme'

const AccountMenuItem = ({ user }) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <img
        src={user.avatar}
        width={30}
        height={30}
        style={{ borderRadius: 30 }}
        alt=""
      />
      <Typography
        sx={{
          color: muiTheme.palette.text.primary,
          fontFamily: 'Fractul',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '32px',
        }}
      >
        {user.username}
      </Typography>
    </Box>
  )
}
const MySelect = styled(Select)(() => ({
  '& .MuiSelect-select': {
    padding: '12px',
  },
  borderRadius: '0px',
}))
export default function AccountSelect() {
  const user = useAppSelector((state) => state.auth.user)
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <Box>
      <FormControl
        sx={{
          background: muiTheme.palette.background.paper,
          // border: muiTheme.palette.border.main,
          minWidth: 120,
        }}
      >
        <MySelect
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value="">
            <AccountMenuItem user={user} />
          </MenuItem>
          <MenuItem value={10}>
            <AccountMenuItem user={user} />
          </MenuItem>
          <MenuItem value={20}>
            <AccountMenuItem user={user} />
          </MenuItem>
          <MenuItem value={30}>
            <AccountMenuItem user={user} />
          </MenuItem>
        </MySelect>
      </FormControl>
    </Box>
  )
}
