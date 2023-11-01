import { createTheme as createAtruimTheme } from '@mui/material/styles'

import type { CreateAtrimTheme, AtriumTheme } from './types/AtriumThemeType'
import { assertCast } from './types/AtriumThemeType'
assertCast<CreateAtrimTheme>(createAtruimTheme)

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsVariantOverrides {
    primary: true
    secondary: true
  }
}

export const colors = {
  black: '#21E0A5',
  grey1: '#4A4A4A',
  grey2: '#B8B8B8',
  grey3: '#EDEDED',
  offBlack: '#1A1A1A',
  offWhite: '#F2F2F2',
  primaryBlue: '#0049D1',
  primaryRed: '#D11F00',
  primaryYellow: '#FFDC00',
}

const muiTheme: AtriumTheme = createAtruimTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            border: `1px solid ${theme.palette.text.primary}`,
            color: theme.palette.text.primary,
          },
          border: `1px solid ${theme.palette.background.default}`,
          borderRadius: '0',
          color: theme.palette.background.default,
          fontFamily: 'Fractul Alt',
          textTransform: 'capitalize',
        }),
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            '& .MuiSnackbarContent-message': {
              fontFamily: 'Fractul Alt',
            },
            borderRadius: 0,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .small': {
            borderRadius: 0,
          },

          '& input': {
            fontFamily: 'Fractul Alt',
          },
          // border: '1px solid red',
          fontFamily: 'Fractul Alt',
        },
      },
      variants: [
        {
          props: { variant: 'standard' },
          style: {
            '& > div.MuiInputBase-root::after': {
              borderBottom: '0px solid blue',
              content: '""',
            },
            '& > div.MuiInputBase-root::before': {
              borderBottom: '0px solid blue',
              content: '""',
            },
            '& > div.MuiInputBase-root:hover::before': {
              borderBottom: '0px solid blue',
              content: '""',
            },
            border: `1px solid #80868B`,
            borderRadius: 0,
            padding: '20px',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: '0px',
          },
        },
        {
          props: { variant: 'primary' },
          style: {
            border: '1px solid red',
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            border: '1px solid red',
          },
        },
      ],
    },
  },
  palette: {
    background: {
      default: '#80868B',
      paper: '#252525', //CONTAINER
    },
    border: {
      dark: '#1D1F23',
      light: '#80868B',
      main: '#3C4043',
    },
    colors: {
      red: '#E90026',
      yellow: '#FFE721',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    error: {
      500: '#FFE721',
    },
    grey: {
      100: colors.grey3,
      200: colors.grey2,
      300: colors.grey1,
    },
    icon: {
      dark: '#898F94',
    },
    mode: 'dark',
    primary: {
      dark: colors.offBlack,
      main: '#303234', //LINE & GRID,
    },
    secondary: {
      dark: colors.primaryBlue,
      light: colors.primaryYellow,
      // main: colors.primaryRed,
      main: '#E90026',
    },
    text: {
      disabled: '#a8a8a8',
      primary: colors.offWhite, //ICONS ON BACKGROUND
      secondary: '#80868B', //TEXT IN ICON/CONTAINER
    },
    widget: {
      background: '#121212',
    },
  },
  spacing: 8,
  typography: {
    body1: {
      color: '#A8A8A8',
      fontFamily: 'Andale Mono Regular',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '-0.05em',
      lineHeight: '120%',
    },
    body2: {
      color: '#F2F2F2',
      fontFamily: 'Andale Mono Regular',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '-0.05em',
      lineHeight: '20px',
    },
    caption: {
      color: '#a8a8a8',
      fontFamily: 'Andale Mono Regular',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      letterSpacing: '-0.05em',
      lineHeight: '90%',
    },
    h1: {
      color: '#F8F9FA',
      fontFamily: 'Fractul Alt',
      fontSize: '48px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '110%',
      textTransform: 'uppercase',
    },
    h2: {
      color: '#F8F9FA',
      fontFamily: 'Fractul Alt',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '120%',
      textTransform: 'capitalize',
    },
    h3: {
      color: '#F8F9FA',
      fontFamily: 'Fractul Alt',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '32px',
      textTransform: 'capitalize',
    },
    h4: {
      color: '#F8F9FA',
      fontFamily: 'Fractul Alt',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: '29px',
      textTransform: 'capitalize',
    },
    h5: {
      color: '#F8F9FA',
      fontFamily: 'Fractul Alt',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: '110%',
      textTransform: 'capitalize',
    },
    h6: {
      color: '#F8F9FA',
      fontFamily: 'Fractul Alt',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      lineHeight: '19px',
      textTransform: 'capitalize',
    },
  },
})

export const palette = muiTheme.palette

export default muiTheme
