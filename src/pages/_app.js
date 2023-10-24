import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { defaultTheme } from '@/utils/theme'

/**
 * 
 * App component, it checks if the page has any layout, if so, injects it with the app Theme
 * @component
 */
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
