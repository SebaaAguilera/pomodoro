import React from 'react'
import IconButton from '@mui/material/IconButton'
import Replay from '@mui/icons-material/Replay'

/**
 * 
 * PlayPauseButton, resets the timer, its memoized so it's doesn't re-render on timer changes
 * @component
 */
const ResetButton = React.memo(({ reset }) => {
  return (
    <IconButton color="primary" onClick={reset}>
      <Replay fontSize="large" />
    </IconButton>
  )
})

ResetButton.displayName = 'ResetButton'

export default ResetButton
