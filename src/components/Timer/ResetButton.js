import React from 'react'
import IconButton from '@mui/material/IconButton'
import Replay from '@mui/icons-material/Replay'

// Memoize component, so it's not re-render on timer changes
const ResetButton = React.memo(({ reset }) => {
  return (
    <IconButton color="primary" onClick={reset}>
      <Replay fontSize="large" />
    </IconButton>
  )
})

ResetButton.displayName = "ResetButton"

export default ResetButton
