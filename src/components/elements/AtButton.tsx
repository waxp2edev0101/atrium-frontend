import { Typography, Button } from '@mui/material'
import React from 'react'

import { palette } from '../../MuiTheme'

type ButtonProps = {
  // fontFamily?: string
  text: React.ReactNode
  icon?: React.ReactNode
  variant?:
    | 'default'
    | 'primary'
    | 'secodary'
    | 'outlined'
    | 'small'
    | 'warning'
    | 'x-small'
  active?: boolean
}

export const AtButton: React.FC<ButtonProps> = ({
  variant,
  text,
  icon,
  active,
}) => {
  const _variant = variant ? variant : 'default'
  return (
    <Button
      sx={{
        background: active
          ? 'white'
          : _variant === 'small' || _variant === 'x-small'
          ? palette.background.paper
          : _variant === 'default'
          ? '#2E3134'
          : _variant === 'primary'
          ? palette.background.paper
          : _variant === 'warning'
          ? '#E90026'
          : '',
        border: `${
          variant === 'outlined' ? '1px solid ' + palette.primary.main : 'none'
        }`,
        borderRadius: '0px',
        display: 'flex',
        gap: '6px',
        justifyContent: 'center',
        padding:
          _variant === 'small'
            ? '4px 16px'
            : _variant === 'default' || _variant === 'primary'
            ? '12px 24px'
            : _variant === 'x-small'
            ? '0px 8px'
            : '6px 12px',
      }}
    >
      {icon != undefined && icon ? icon : ''}
      <Typography
        sx={{
          color: active ? palette.text.secondary : palette.text.primary,
          fontFamily:
            _variant === 'outlined'
              ? 'Fractul Alt'
              : _variant === 'primary'
              ? 'Andale Mono Regular'
              : 'Fractul',
          fontSize: `${
            _variant === 'outlined'
              ? '16px'
              : _variant === 'small'
              ? '14px'
              : _variant === 'default'
              ? '20px'
              : _variant === 'primary'
              ? '16px'
              : ''
          }`,
          fontWeight: _variant === 'default' ? '800' : '',
          textTransform: 'capitalize !important',
        }}
      >
        {text}
      </Typography>
    </Button>
  )
}
