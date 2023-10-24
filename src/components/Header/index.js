import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'

function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div style={{
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
            marginBottom: '20px',
            color: 'black'
          }}
          >
          NeuralClocks
        </Typography>
      </Button>
    </div>
  );
}

export default Header
