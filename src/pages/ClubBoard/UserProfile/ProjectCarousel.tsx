import { Box, Typography } from '@mui/material'
import CarouselLibrary from 'react-material-ui-carousel'

import { AText, AtButton } from '../../../components'
import projectImage from '../images/project-image.png'

import { Container as PContainer } from './styled'

export const Project = () => {
  return (
    <Box display="flex">
      <img src={projectImage} alt="" width="250px" height="250px" />
      <Box
        px="24px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <AText
            sx={{
              fontSize: '36px',
              fontWeight: '800',
              lineHeight: '32px',
            }}
          >
            Antisocial <br />
            Ape Club
          </AText>
        </Box>
        <Box>
          <AText className="disabled" sx={{ fontSize: '16px !important' }}>
            Current Roles:
            <Typography component="span" color="#0149D1" px="4px">
              OG
            </Typography>
            <Typography component="span" color="#FFE721" px="4px">
              WL
            </Typography>
            <Typography component="span" color="#E90026" px="4px">
              TM
            </Typography>
          </AText>
        </Box>
        <Box display="flex" gap="32px">
          <Box>
            <AText sx={{ fontSize: '24px' }}>12</AText>
            <AText className="disabled">NFT Owned</AText>
          </Box>
          <Box>
            <AText sx={{ fontSize: '24px' }}>july 3rd</AText>
            <AText className="disabled">date joined</AText>
          </Box>
        </Box>
        <Box>
          <AtButton variant="default" text="view project" />
        </Box>
      </Box>
    </Box>
  )
}

export const ProjectCarousel = () => {
  return (
    <PContainer>
      <CarouselLibrary
        navButtonsAlwaysVisible
        autoPlay={false}
        indicators={true}
      >
        {new Array(5).fill(1).map((_, key: number) => (
          <Project key={key} />
        ))}
      </CarouselLibrary>
    </PContainer>
  )
}
