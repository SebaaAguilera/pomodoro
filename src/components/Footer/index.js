import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'

/**
 * Footer component, its fixed and change flex orentation on mobile/desktop window
 * @component  
 */
function Footer() {
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      textAlign: 'center',
      position: isMobile ? '' : 'fixed',
      bottom: 0,
      width: '100%',
      paddingInline: 10
    }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} NeuralClocks. All rights reserved.
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2">
          Developed by NeuralWorks
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link href="/" color="inherit">
          <Typography variant="body2">
            Privacy Policy
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer
