import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'

function Footer() {
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div style={{
      display: "flex",
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: "center",
      gap: 10,
      position: "fixed",
      bottom: 0,
      width: "100%",
      paddingInline: 10
    }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} NeuralClocks. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Developed by NeuralWorks
        </Typography>
        <Link href="/" color="inherit" style={{ marginLeft: 8 }}>
          <Typography variant="body2">
            Privacy Policy
          </Typography>
        </Link>
    </div>
  );
}

export default Footer
