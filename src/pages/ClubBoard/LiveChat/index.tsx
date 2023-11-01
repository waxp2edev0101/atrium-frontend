import React from 'react'

import Heading from './Heading'
import SendMessage from './SendMessage'
import * as Container from './styled'
import TimeLine from './TimeLine'

const LiveChat: React.FC = () => {
  return (
    <Container.Root variant="outlined">
      {/* eslint-disable-line prettier/prettier */}
      <Container.Heading>
        <Heading />
      </Container.Heading>

      {/* eslint-disable-line prettier/prettier */}
      <Container.Timeline>
        <TimeLine />
      </Container.Timeline>

      {/* eslint-disable-line prettier/prettier */}
      <Container.SendMessage>
        <SendMessage />
      </Container.SendMessage>
    </Container.Root>
  )
}

export default LiveChat
