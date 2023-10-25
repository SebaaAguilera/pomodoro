import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'

// Responsive Design so it fits the device
const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    position: 'fixed',
    top: 0,
  },
}));

/**
 * Header component, its fixed
 * @component  
 */
function Header() {

  return (
    <ResponsiveBox>
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
    </ResponsiveBox>
  )
}

export default Header
