import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'

/**
 * Header component, its fixed and change centering on mobile/desktop window
 * @component  
 */
function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box style={{
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'left',
      alignItems: 'center',
      textAlign: 'center',
      position: 'fixed',
      top: 0,
      width: '100%',
      paddingInline: 10
    }}>
      <Button
        sx={{ textTransform: 'none' }}
        href="/"
      >   
        <Typography
          variant="h5"
          fontWeight={700}
          style={{
            marginBottom: 5,
            color: 'black'
          }}
          >
          NeuralClocks
        </Typography>
      </Button>
    </Box>
  );
}

export default Header
