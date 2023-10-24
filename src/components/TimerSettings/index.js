import { useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

/**
 * 
 * TimerSettings component, it display a form to change the timer times
 * @component 
 */
const TimerSettings = ({ timersSeconds, setTimersSeconds, hideSettings }) => {
  const pomodoroRef = useRef(null)
  const shortBreakRef = useRef(null)
  const longBreakRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()

    setTimersSeconds({
      POMODORO: parseInt(pomodoroRef.current.value),
      SHORT_BREAK: parseInt(shortBreakRef.current.value),
      LONG_BREAK: parseInt(longBreakRef.current.value)
    })

    hideSettings()
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        inputRef={pomodoroRef}
        label="Pomodoro"
        fullWidth
        sx={{ marginBottom: '10px' }}
        type="number"
        defaultValue={timersSeconds.POMODORO}
        inputProps={{ min: 1 }}
      />
      <TextField
        inputRef={shortBreakRef}
        label="Short Break"
        fullWidth
        sx={{ marginBottom: '10px' }}
        type="number"
        defaultValue={timersSeconds.SHORT_BREAK}
        inputProps={{ min: 1 }}
      />
      <TextField
        inputRef={longBreakRef}
        label="Long Break"
        fullWidth
        sx={{ marginBottom: '10px' }}
        type="number"
        defaultValue={timersSeconds.LONG_BREAK}
        inputProps={{ min: 1 }}
      />
      <Button variant="contained" type="submit" fullWidth> Apply </Button>
    </Box>
  )
}

export default TimerSettings
