import React from 'react'
import CarouselLibrary from 'react-material-ui-carousel'

import carousel1 from './images/carousel1.png'
import carousel2 from './images/carousel2.png'
import carousel3 from './images/carousel3.png'

export const imageList = [carousel1, carousel2, carousel3]

const Carousel: React.FC = () => {
  return (
    <CarouselLibrary
      navButtonsAlwaysVisible
      autoPlay={false}
      indicators={false}
    >
      {imageList.map((img, i) => {
        return <img src={img} key={i} width="715px" height="380px" />
      })}
    </CarouselLibrary>
  )
}

export default Carousel
