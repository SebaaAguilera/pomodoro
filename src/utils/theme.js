import { createTheme } from '@mui/material'

export const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
  palette: {
    primary: {
      main: '#000000', // Black
      light: '#333333', // Darker Black
      dark: '#000000', // Black
      contrastText: '#FFFFFF', // White
    },
  }
})