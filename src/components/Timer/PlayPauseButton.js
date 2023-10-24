import React from 'react'
import IconButton from '@mui/material/IconButton'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Pause from '@mui/icons-material/Pause'

// Memoize component, so it's not re-render on timer changes
const PlayPauseButton = React.memo(({ isActive, toggle }) => {
  return (
    <IconButton color="primary" variant="contained" onClick={toggle}>
      {isActive ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
    </IconButton>
  )
})

PlayPauseButton.displayName = "PlayPauseButton"

export default PlayPauseButton
