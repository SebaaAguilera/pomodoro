import React from 'react'
import { Typography, Link } from '@mui/material'

function Footer() {
  return (
    <div style={{
      display: "flex",
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
          Privacy Policy
        </Link>
    </div>
  );
}

export default Footer;
