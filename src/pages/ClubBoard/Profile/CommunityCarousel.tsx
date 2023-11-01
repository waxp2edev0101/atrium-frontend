import { Box, Typography } from '@mui/material'
import { useState, useRef } from 'react'
import Slider from 'react-slick'

import { Button } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { ICommunityMember } from '../../../types/model'
import { Community as Panel } from '../styled'

import { CommunityPanel } from './CommunityPanel'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  dots: false,
  focusOnSelect: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
}
const CarouselDotItem = ({ active }: { active?: boolean }) => {
  return (
    <Box
      sx={{
        background: active ? palette.secondary.main : palette.text.disabled,
        height: 4,
        width: '100%',
      }}
    />
  )
}
const CarouselDots = ({
  length,
  current,
}: {
  length: number
  current: number
}) => {
  return (
    <Box width="100%" display="flex" gap={3}>
      {new Array(length).fill(2).map((_, key: number) => (
        <CarouselDotItem key={key} active={key === current} />
      ))}
    </Box>
  )
}
export const CommunityCarousel = ({
  members,
}: {
  members: ICommunityMember[]
}) => {
  const [index, setIndex] = useState(2)
  const sliderRef = useRef<Slider>(null)

  const handleNext = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const handlePrev = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }
  return (
    <Panel
      sx={{
        '& .slick-current': {
          background: 'none',
          borderRadius: 0,
          padding: 0,
        },
      }}
    >
      {members && members.length > 0 ? (
        <Slider
          ref={sliderRef}
          {...sliderSettings}
          beforeChange={(_, idx: number) => {
            setIndex(idx)
          }}
        >
          {members.map((item: any, key: number) => (
            <CommunityPanel member={item} key={key} />
          ))}
          {/* {members.map((item: any, key: number) => (
            <CommunityPanel member={item} key={key} />
          ))}
          {members.map((item: any, key: number) => (
            <CommunityPanel member={item} key={key} />
          ))}
          {members.map((item: any, key: number) => (
            <CommunityPanel member={item} key={key} />
          ))} */}
        </Slider>
      ) : (
        <Box p="24px" display="flex" justifyContent="center">
          <Typography variant="h5">No Joined Community</Typography>
        </Box>
      )}

      {members && members.length > 0 && (
        <Box display="flex" gap="24px">
          <Box display="flex" py={2} gap="24px" width="100%">
            <CarouselDots
              length={members && members.length ? members.length : 1}
              current={index}
            />
            {/* <CarouselDots length={4} current={index} /> */}
          </Box>
          <Box display="flex" gap="16px">
            <Button
              onClick={handlePrev}
              className="primary active"
              color={palette.text.disabled}
            >
              Prev
            </Button>
            <Button
              onClick={handleNext}
              className="primary active"
              color={palette.text.disabled}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
    </Panel>
  )
}
