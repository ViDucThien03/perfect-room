import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00B98E',
      light: '#EFFDF5',
      dark: '#0E2E50',
      contrastText: '#fff'
    },
    secondary: {
      main: '#0E2E50',
      dark: '#666565'
    }
  },
  typography: {
    fontFamily: 'Inter',
    subtitle1: {
      fontWeight: '700',
      lineHeight: 1.2,
      fontSize: '3rem',
      textTransform: 'capitalize',
      color: '#0E2E50'
    },
    subtitle2: {
      fontWeight: '700',
      lineHeight: 1.2,
      fontSize: '2rem',
      textTransform: 'capitalize',
      color: '#0E2E50'
    },

    body1: {
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    body2: {}
  }
})
