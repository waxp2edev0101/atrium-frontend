import { Button, styled } from '@mui/material'

type TagStyleProps = { t_color: string }
export const TagStyled = styled(Button)<TagStyleProps>(
  ({ theme, t_color }) => ({
    '&.outlined': {
      background: 'transparent',
      border: `1px solid ${t_color ? t_color : theme.palette.background.paper}`,
      color: t_color ? t_color : theme.palette.text.primary,
    },
    background: t_color,
    borderRadius: '54px',
    fontFamily: 'Andale Mono Regular',
    fontSize: '12px',
    fontWeight: 400,
    padding: '4px 10px',
    textTransform: 'capitalize',
  })
)

export const TagButtonStyled = ({
  color,
  children,
  className,
  onClick,
}: {
  color?: string
  children: React.ReactNode
  className?: string
  onClick?: AnyFunction
}) => {
  return (
    <TagStyled t_color={color || ''} className={className} onClick={onClick}>
      {children}
    </TagStyled>
  )
}
