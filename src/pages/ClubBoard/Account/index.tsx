import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'

import commentAvatar from '../images/Ellipse 37.png'
import icon2 from '../images/fa-solid_search-1.png'
import icon1 from '../images/fa-solid_search.png'
import bg from '../images/profile-landing-image.png'
import profileImage from '../images/Rectangle 121.png'
import cardImage from '../images/Rectangle 138.png'
import icon3 from '../images/Vector.png'
import * as GContainer from '../styled'

import { Text, Heading, SubHead, HeadButton, Container, Card } from './styled'

const Comment = ({ text }: { text: string }) => {
  return (
    <Box sx={{ display: 'flex', gap: '24px' }}>
      <Box sx={{ padding: '42px 0px' }}>
        <img src={commentAvatar} alt="" width="90px" />
      </Box>
      <Text sx={{ background: '#17181B', color: '#F8F9FA', padding: '36px' }}>
        {text}
      </Text>
    </Box>
  )
}
const Account = () => {
  return (
    <Box sx={{ marginTop: '160px' }}>
      <Box sx={{ paddingLeft: '75px' }}>
        <Box>
          <img src={bg} alt="" width="100%" />
        </Box>
      </Box>
      <GContainer.Page>
        <Box sx={{ gridArea: 'main' }}>
          <Box>
            <Box sx={{ p: '32px' }}>
              <Heading>spotify integrating with atrium</Heading>
              <Box sx={{ display: 'flex', gap: '12px', padding: '36px 0px' }}>
                <HeadButton>spotify</HeadButton>
                <HeadButton>atrium</HeadButton>
                <HeadButton>trending news</HeadButton>
                <HeadButton>integrations</HeadButton>
              </Box>
            </Box>
            <Box></Box>
          </Box>
          <Container>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quam
              in purus maecenas nisl tincidunt. Nascetur justo adipiscing lectus
              sapien sit accumsan. Platea ultrices est odio neque. Quam
              hendrerit amet, tellus lobortis lacus. Arcu amet, eu, dignissim
              gravida. A turpis ut id amet sollicitudin leo fusce integer.
            </Text>
            <SubHead>“spotify integrating with atrium”</SubHead>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu
              sed et tortor proin. Ac vulputate eget sagittis amet metus feugiat
              vitae. Velit nunc, augue felis interdum integer aliquet commodo
              vel ultrices. Feugiat malesuada tempor euismod et nibh ac laoreet
              urna, cursus. Feugiat nibh non amet, nunc risus faucibus viverra
              hendrerit. Cursus sed est tellus lorem nec vel. Lacinia ut rhoncus
              massa id turpis quisque amet, non.
            </Text>
            <img src={profileImage} alt="" />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu
              sed et tortor proin. Ac vulputate eget sagittis amet metus feugiat
              vitae. Velit nunc, augue felis interdum integer aliquet commodo
              vel ultrices. Feugiat malesuada tempor euismod et nibh ac laoreet
              urna, cursus. Feugiat nibh non amet, nunc risus faucibus viverra
              hendrerit. Cursus sed est tellus lorem nec vel. Lacinia ut rhoncus
              massa id turpis quisque amet, non.
            </Text>
          </Container>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <SubHead>comments</SubHead>
              <HeadButton>See All</HeadButton>
            </Box>
            <Box>
              <Comment
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac convallis commodo morbi ut leo gravida. A nunc laoreet cras semper netus quis blandit eu.`}
              />
              <Comment
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac convallis commodo morbi ut leo gravida. A nunc laoreet cras semper netus quis blandit eu.`}
              />
              <Comment
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac convallis commodo morbi ut leo gravida. A nunc laoreet cras semper netus quis blandit eu.`}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: '24px', padding: '24px 0px' }}>
              <Card sx={{ padding: '24px' }}>
                <img src={icon1} alt="" />
              </Card>
              <Card sx={{ padding: '24px' }}>
                <img src={icon2} alt="" />
              </Card>
              {/* <Card>
              <input style={{
                background: 'transparent',
                border: 'none'
              }} />
              <img src={icon3} alt='' />
            </Card> */}
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ fontSize: '36px', left: '12px', top: '2px' }}
                >
                  Type Here...
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  sx={{ fontSize: '42px', height: '100%' }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <img src={icon3} alt="" />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
          </Container>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <SubHead>comments</SubHead>
              <HeadButton>See All</HeadButton>
            </Box>
            <Box sx={{ display: 'flex', gap: '36px', padding: '24px 0px' }}>
              <Card sx={{ padding: '24px' }}>
                <img src={cardImage} alt="" />
                <SubHead>spotify integrating with atrium</SubHead>
                <Text>//mar 1st, 2022</Text>
              </Card>
              <Card sx={{ padding: '24px' }}>
                <img src={cardImage} alt="" />
                <SubHead>spotify integrating with atrium</SubHead>
                <Text>//mar 1st, 2022</Text>
              </Card>
              <Card sx={{ padding: '24px' }}>
                <img src={cardImage} alt="" />
                <SubHead>spotify integrating with atrium</SubHead>
                <Text>//mar 1st, 2022</Text>
              </Card>
            </Box>
          </Container>
        </Box>
      </GContainer.Page>
    </Box>
  )
}

export { Account }
