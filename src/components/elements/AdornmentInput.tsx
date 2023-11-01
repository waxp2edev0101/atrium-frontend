import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'

import { palette } from '../../MuiTheme'

export const AdornmentInput: React.FC<{
  adornment: React.ReactNode
  label: string
  variant?: 'primary' | 'default' | undefined
  sx?: object
  value?: string
  onChange?: AnyFunction
  onClick?: AnyFunction
  onSend?: AnyFunction
}> = ({ adornment, label, variant, sx, value, onChange, onClick, onSend }) => {
  function onEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      if (onSend) {
        onSend()
      }
    }
  }

  return (
    <FormControl
      sx={{ width: variant === 'default' ? '100%' : '350px', ...sx }}
      variant="outlined"
    >
      <InputLabel
        htmlFor="outlined-adornment-password"
        sx={{
          color: palette.text.secondary,
          fontFamily: 'Andale Mono Regular',
          fontSize: '18px',
          fontWeight: 400,
          letterSpacing: '-0.1em',
          lineHeight: '32px',
          px: '24px',
          textTransform: 'capitalize',
          top: '-3px',
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onEnterPress}
        sx={{
          '& input': {
            py: '16px',
          },
          borderRadius: '0px',
          fontSize: '18px',
          height: '100%',
          px: '24px',
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={onClick ? (e) => onClick(e) : undefined}
            >
              {adornment}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  )
}
