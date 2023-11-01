import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/images/atrium-logo-large.png'
import logotype from '../../assets/images/atrium-logotype-large.png'
import { LoginLayout } from '../../components'
export const Welcome = () => {
  const navigate = useNavigate()
  return (
    <LoginLayout>
      <Box p="90px" height="100%">
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
          onClick={() => navigate('/signin')}
        >
          <Box display="flex" justifyContent="center">
            <img src={logo} alt="" width="160px" height="160px" />
          </Box>
          <Box>
            <Box display="flex" justifyContent="center">
              <Typography variant="h3">welcome to</Typography>
            </Box>
            <Box display="flex" justifyContent="center" mt="32px">
              <img src={logotype} alt="" />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" pt="80px">
            <Typography variant="h3">click anywhere to get started</Typography>
          </Box>
        </Box>
      </Box>
    </LoginLayout>
  )
}
