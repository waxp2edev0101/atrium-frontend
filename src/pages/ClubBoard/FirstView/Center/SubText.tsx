import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../../MuiTheme'

interface Props {
  text: string
}

const SubText: React.FC<Props> = ({ text }) => {
  return (
    <Text
      variant="h6"
      sx={{
        color: palette.text.disabled,
        fontFamily: 'Andale Mono Regular',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: '-0.05em',
        lineHeight: '22px',
        textAlign: 'center',
      }}
    >
      {text}
    </Text>
  )
}

export default SubText
