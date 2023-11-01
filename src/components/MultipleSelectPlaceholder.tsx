import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import type { SelectChangeEvent } from '@mui/material/Select'
import Select from '@mui/material/Select'
import { useTheme, styled } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import * as React from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}
const CSelect = styled(Select)(() => ({
  '& .MuiSelect-select': {
    padding: '12px 14px',
  },
}))
export default function MultipleSelectPlaceholder() {
  const theme = useTheme()
  const [personName, setPersonName] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <FormControl sx={{ mt: 3, width: '100%' }}>
        <CSelect
          // multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected: any) => {
            if (selected?.length === 0) {
              return <em>Choose post</em>
            }

            return selected?.join(', ')
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ borderRadius: '0px' }}
        >
          <MenuItem disabled value="">
            <em>Choose post</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </CSelect>
      </FormControl>
    </div>
  )
}
