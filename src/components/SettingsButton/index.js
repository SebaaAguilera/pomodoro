import React from 'react'
import IconButton from '@mui/material/IconButton'
import Settings from '@mui/icons-material/Settings'


const SettingsButton = ({ showSettings }) => {
  return (
    <IconButton color="primary" onClick={showSettings}>
      <Settings fontSize="large" />
    </IconButton>
  )
}

export default SettingsButton
