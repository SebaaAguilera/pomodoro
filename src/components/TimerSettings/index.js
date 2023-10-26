import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TimeField from './TimeField'
import HideSettingsButton from './HideSettingsButton'
import { defaultTimers } from '@/utils/constants'

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

  const reset = () => {
    setPomodoroSeconds(defaultTimers.POMODORO)
    setShortBreakSeconds(defaultTimers.SHORT_BREAK)
    setLongBreakSeconds(defaultTimers.LONG_BREAK)
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Settings
        </Typography>
        <HideSettingsButton hideSettings={hideSettings}/>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      > 
        <TimeField
          label="Pomodoro"
          value={pomodoroSeconds}
          onChange={setPomodoroSeconds}
        />
        <TimeField
          label="Short Break"
          value={shortBreakSeconds}
          onChange={setShortBreakSeconds}
        />
        <TimeField
          label="Long Break"
          value={longBreakSeconds}
          onChange={setLongBreakSeconds}
        />
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Button variant="contained" type="submit" sx={{ width: '50%' }}> Apply </Button>
          <Button variant="outlined" sx={{ width: '50%' }} onClick={reset}> Reset </Button>
        </Box>
      </Box>
    </>
  )
}

export default TimerSettings
