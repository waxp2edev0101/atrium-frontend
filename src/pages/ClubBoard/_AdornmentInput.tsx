import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'

type Props = {
  adornment: React.ReactNode
  label: string
  sx?: object
  inputStyle?: object
  labelStyle?: object
}

export const AdornmentInput: React.FC<Props> = ({
  adornment,
  label,
  sx,
  inputStyle,
  labelStyle,
}: Props) => {
  return (
    <FormControl sx={{ width: '100%', ...sx }} variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-password"
        sx={{
          color: '#80868B',
          fontFamily: 'Andale Mono Regular',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          letterSpacing: '-0.1em',
          lineHeight: '32px',
          top: '-3px',
          ...labelStyle,
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        sx={{
          borderRadius: '0px',
          color: '#80868B',
          fontFamily: 'Andale Mono Regular',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          height: '100%',
          letterSpacing: '-0.1em',
          lineHeight: '32px',
          ...inputStyle,
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              {adornment}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  )
}
