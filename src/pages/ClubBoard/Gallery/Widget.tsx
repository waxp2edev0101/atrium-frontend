import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
// import Text from '@mui/material/Typography'
import React from 'react'

import { DisabledText, FractulAltText } from '../../../components/Styled'
import { palette } from '../../../MuiTheme'
// import { AdornmentInput } from '../AdornmentInput'
import * as Styled from '../SearchAppBar/styled'
// import styled from '@mui/material/styles/styled'
// import { OutlinedInput } from '@mui/material'

// const WidgetSearchInput = styled(OutlinedInput)(() => ({
//   border: '1px solid blue',
//   '& .MuiOutlinedInput-input': {
//     padding: '3px',
//     border: '1px solid red'
//   }
// }))
const traits = ['skin', 'head', 'eyes', 'mouth', 'hat']

const TraitItem = ({ trait }: { trait: string }) => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        border: `2px solid ${palette.border.dark}`,
        display: 'flex',
        height: 40,
        justifyContent: 'space-between',
        marginTop: '10px',
        width: 220,
      }}
    >
      <FractulAltText
        variant="h6"
        sx={{
          alignItems: 'center',
          color: '#fff',
          display: 'flex',
          fontSize: '16px',
          fontWeight: 'bold',
          padding: '0px 12px',
        }}
      >
        {trait}
      </FractulAltText>
      <AddIcon fontSize="large" sx={{ color: '#fff' }} />
    </Box>
  )
}
const Widget = () => (
  <>
    <FractulAltText
      variant="h6"
      sx={{
        color: '#fff',
        fontWeight: 'bold',
        width: 290,
      }}
    >
      Filter
    </FractulAltText>
    <Box
      sx={{
        display: 'flex',
        itemAlign: 'center',
        justfyContent: 'space-btween',
      }}
    >
      <DisabledText
        variant="body1"
        sx={{
          alignItems: 'center',
          color: palette.text.primary,
          display: 'flex',
          fontSize: '14px',
          letterSpacing: '-0.1em',
          width: 290,
        }}
      >
        Listed Items Only
      </DisabledText>
      <Switch sx={{ positon: 'reletive', right: '10px' }} />
    </Box>
    <Box sx={{ width: 290 }}>
      {/* @TODO Need Gellery spefic search input */}
      {/* <Box sx={{ marginLeft: '-30px', width: 270 }}> */}
      <Box sx={{ marginLeft: '-24px', width: 260 }}>
        {/* <Box sx={{ width: 220 }}> */}
        <Styled.Search>
          <Styled.TextInput
            placeholder="Search By ID #..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{ color: '#fff', fontFamily: 'Fractul Alt', fontWeight: '400' }}
          />
          <Styled.SearchIconWrapper>
            <SearchIcon sx={{ color: palette.text.primary }} />
          </Styled.SearchIconWrapper>
        </Styled.Search>
        {/* <WidgetSearchInput  
          adornment={<SearchIcon />}
          label='Search By ID #...'
          inputStyle={{
            padding: '0px',

          }}  
        /> */}
      </Box>
      {/* eslint-disable-next-line prettier/prettier */}
      { traits.map((trait: string, key: number) => (<TraitItem key={key} trait={trait} />))}
    </Box>
  </>
)

export default Widget
