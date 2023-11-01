import { Box, TextField, InputLabel } from '@mui/material'
import { styled } from '@mui/material/styles'

import MultipleSelectPlaceholder from '../../../components/MultipleSelectPlaceholder'
import muiTheme from '../../../MuiTheme'
import { UploadButton } from '../ArticleBuilder/styled'
// import { Heading, Text } from '../EditProfile/styled'
import { TextInput } from '../EditProfile/TextInput'
import * as Container from '../styled'

const CTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    borderRadius: '0px',
  },
}))
export const FeedbackForm = () => {
  return (
    <Container.Page>
      <Box sx={{ gridArea: 'main', padding: '64px 0px' }}>
        <Box>
          {/* <Heading sx={{ textAlign: 'center' }}>Feedback Form</Heading> */}
          {/* <Text sx={{ justifyContent: 'center' }}>
            Submit feedback or bug reports to enter a raffle to win an Atrium
            NFT!
          </Text> */}
        </Box>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <TextInput label={`Display Name`} />
          <MultipleSelectPlaceholder />
        </Box>
        <Box sx={{ padding: '24px 0px' }}>
          <InputLabel sx={{ color: muiTheme.palette.text.primary }}>
            Description/Bio
          </InputLabel>
          <CTextField
            multiline
            rows={5}
            maxRows={10}
            sx={{ borderRadius: '0px', width: '100%' }}
          ></CTextField>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <UploadButton>Submit</UploadButton>
        </Box>
      </Box>
    </Container.Page>
  )
}
