import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { styled } from '@mui/system'

// Responsive Design so it fits the device
const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    position: 'fixed',
    bottom: 0,
    paddingInline: 10,
  },
}));

/**
 * Footer component, its fixed and change flex orentation on mobile/desktop window
 * @component  
 */
function Footer() {
  
  return (
    <ResponsiveBox>
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
        <Link color="inherit" sx={{ cursor: 'pointer' }}> 
          {/* Cursor pointer to fake link behaviour  */}
          <Typography variant="body2">
            Privacy Policy
          </Typography>
        </Link>
      </Box>
    </ResponsiveBox>
  )
}

export default Footer
