import { TextField as MuiTextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AtriumTextField = styled(MuiTextField)(({ theme }) => ({
  '& input': {
    fontSize: '24px',
    padding: '24px',
  },
  '&.dark': {
    background: `#202124`,
    border: `2px solid #2E3134`,
    color: 'white',
  },
  '&.default': {
    // background: theme.palette.text.disabled,
    background: 'rgba(242, 242, 242, 0.1)',
  },
  '&.rounded': {
    '& input, .MuiOutlinedInput-root': {
      borderRadius: '12px',
    },
    borderRadius: '12px',
  },
  border: `2px solid ${theme.palette.text.disabled}`,
  borderRadius: 0,
  width: '100%',
}))

export const TextField = ({
  // variant,
  multiline,
  // color,
  name,
  value,
  onChange,
  className,
  sx,
  rows,
  fullWidth,
}: {
  variant?: 'primary' | 'secondary'
  multiline?: boolean
  // color?: string
  name?: string
  value?: string
  onChange?: AnyFunction
  className?: string
  sx?: object
  rows?: number
  fullWidth?: boolean
}) => {
  return (
    <AtriumTextField
      // variant={variant}
      fullWidth={fullWidth}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      multiline={multiline}
      sx={sx}
      rows={rows}
    />
  )
}
