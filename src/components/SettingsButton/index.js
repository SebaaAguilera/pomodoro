import React from 'react'
import IconButton from '@mui/material/IconButton'
import Settings from '@mui/icons-material/Settings'


const SettingsButton = ({ showSettings }) => {
  return (
    <IconButton color="secondary" onClick={showSettings}>
      <Settings />
    </IconButton>
  )
}

export default SettingsButton
