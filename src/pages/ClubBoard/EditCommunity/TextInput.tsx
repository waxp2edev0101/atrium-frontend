import { FormControl, InputLabel } from '@mui/material'

import muiTheme from '../../../MuiTheme'

import { BootstrapInput } from './styled'

export const TextInput: React.FC<{ label }> = ({
  label,
}: {
  label: string
}) => {
  return (
    <FormControl variant="standard" sx={{ width: '100%' }}>
      <InputLabel
        shrink
        htmlFor="bootstrap-input"
        sx={{ color: muiTheme.palette.text.primary, fontSize: '18px' }}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        sx={{ width: '100%' }}
        defaultValue=""
        id="bootstrap-input"
      />
    </FormControl>
  )
}
