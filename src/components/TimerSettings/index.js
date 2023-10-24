import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TimeField from './TimeField'

/**
 * 
 * TimerSettings component, it display a form to change the timer times
 * @component 
 */
const TimerSettings = ({ timersSeconds, setTimersSeconds, hideSettings }) => {

  const [pomodoroSeconds, setPomodoroSeconds] = useState(timersSeconds.POMODORO)
  const [shortBreakSeconds, setShortBreakSeconds] = useState(timersSeconds.SHORT_BREAK)
  const [longBreakSeconds, setLongBreakSeconds] = useState(timersSeconds.LONG_BREAK)

  const onSubmit = (e) => {
    e.preventDefault()

    setTimersSeconds({
      POMODORO: parseInt(pomodoroSeconds),
      SHORT_BREAK: parseInt(shortBreakSeconds),
      LONG_BREAK: parseInt(longBreakSeconds)
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
      <TimeField
        label="Pomodoro"
        value={timersSeconds.POMODORO}
        onChange={(value) => setPomodoroSeconds(value)}
      />
      <TimeField
        label="Short Break"
        value={timersSeconds.SHORT_BREAK}
        onChange={(value) => setShortBreakSeconds(value)}
      />
      <TimeField
        label="Long Break"
        value={timersSeconds.LONG_BREAK}
        onChange={(value) => setLongBreakSeconds(value)}
      />

      <Button variant="contained" type="submit" fullWidth> Apply </Button>
    </Box>
  )
}

export default TimerSettings
