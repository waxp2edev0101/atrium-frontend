import type { ButtonProps as MuiButtonProps } from '@mui/material'
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ButtonProps extends MuiButtonProps {
  btn_color?: string
}
export const ButtonStyled = styled(MuiButton)<ButtonProps>(
  ({ theme, btn_color }) => ({
    '&.disabled': {
      textTransform: 'uppercase',
    },
    '&.large': {
      fontSize: '36px',
      padding: '24px 120px',
    },
    '&.medium': {
      fontSize: '18px',
      padding: '16px 20px',
    },
    '&.outlined': {
      border: btn_color
        ? `1px solid ${btn_color} !important`
        : `1px solid ${theme.palette.primary.main}`,
    },
    '&.primary': {
      background: 'transparent',
      color: `${btn_color ? btn_color : theme.palette.text.primary} !important`,
    },
    '&.primary:hover, &.active': {
      '& .MuiTypography-root': {
        color: `${theme.palette.background.paper} !important`,
      },
      background: btn_color ? btn_color : theme.palette.background.paper,
      border: '1px solid transparent !important',
      color: btn_color
        ? `${theme.palette.background.paper} !important`
        : `text.primary`,
    },
    '&.rounded': {
      '& *': {
        margin: '0px',
      },
      background: btn_color ? btn_color : theme.palette.background.paper,
      borderRadius: '100px',
      padding: '16px',
    },
    '&.secondary': {
      background: theme.palette.background.paper,
      color: `${theme.palette.text.primary} !important`,
    },
    '&.secondary:hover': {
      border: `1px solid ${theme.palette.text.primary}`,
    },
    '&.tag': {
      border: `1px solid ${theme.palette.text.secondary}`,
      borderRadius: '54px',
      color: theme.palette.text.secondary,
      fontFamily: 'Andale Mono Regular',
    },
    '&.tag-active': {
      background: theme.palette.text.disabled,
      border: `1px solid transparent`,
      color: theme.palette.primary.dark,
    },
    '&.tag-large': {
      fontSize: '18px',
      padding: '6px 16px',
    },
    '&.tag-primary': {},
    '&.tag-secondary': {
      background: `${btn_color}`,
      border: `1px solid ${btn_color}`,
      borderRadius: '54px',
      color: theme.palette.primary.dark,
      fontFamily: 'Andale Mono Regular',
    },
    '&.tag-small': {
      fontSize: '12px',
      padding: '4px 10px',
    },
    '&.tag:hover': {
      border: `1px solid ${theme.palette.text.primary}`,
      color: theme.palette.text.primary,
    },
    background: 'transparent',
    border: `1px solid transparent`,
    borderRadius: '0px',
    color: theme.palette.text.primary,
    fontFamily: 'Fractul',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '100%',
    textTransform: 'capitalize',
  })
)

export const Button = ({
  children,
  color,
  className,
  onClick,
  sx,
}: {
  children: React.ReactNode
  color?: string
  className?: string
  onClick?: AnyFunction
  sx?: object
}) => {
  return (
    <ButtonStyled
      btn_color={color || ''}
      className={className}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </ButtonStyled>
  )
}
