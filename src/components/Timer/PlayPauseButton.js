import React from 'react'
import IconButton from '@mui/material/IconButton'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Pause from '@mui/icons-material/Pause'

/**
 * 
 * PlayPauseButton, toggle its status, its memoized so it's doesn't re-render on timer changes
 * @component
 */
const PlayPauseButton = React.memo(({ isActive, toggle }) => {
  return (
    <IconButton color="primary" variant="contained" onClick={toggle}>
      {isActive ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
    </IconButton>
  )
})

PlayPauseButton.displayName = 'PlayPauseButton'

export default PlayPauseButton
