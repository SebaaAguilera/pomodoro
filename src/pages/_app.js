import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { defaultTheme } from '@/utils/theme'

export default function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout || ((page) => page)
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline /> {/* Provides consistent baseline styles */}
      {
        getLayout(<Component {...pageProps}/>)
      }
    </ThemeProvider>
  )
}
