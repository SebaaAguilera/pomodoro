import { useCallback, useState } from 'react'
import Typography from '@mui/material/Typography'
import DefaultLayout from '@/layouts/DefaultLayout'
import SettingsButton from '@/components/SettingsButton'
import Timer from '@/components/Timer'
import TimerSelect from '@/components/TimerSelect'
import TimerSettings from '@/components/TimerSettings'
import Box from '@mui/material/Box'
import ResponsiveContainer from '@/components/ResponsiveContainer'

/**
 * 
 * Pomodoro page, it shows the site Timer, Settings and Select
 * @component
 */
export default function Pomodoro() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [timer, setTimer] = useState('POMODORO')
  const [timersSeconds, setTimersSeconds] = useState({
    POMODORO: 25 * 60,
    SHORT_BREAK: 5 * 60,
    LONG_BREAK: 20 * 60,
  })

  const updateTimer = useCallback((newTimer) => () => {
    setTimer(newTimer)
  }, [])

  return (
    <ResponsiveContainer maxWidth="xs">
      {
        isSettingsOpen ?
        <TimerSettings
          timersSeconds={timersSeconds}
          setTimersSeconds={setTimersSeconds}
          hideSettings={() => setIsSettingsOpen(false)}
        />
        :
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <Typography
              variant="h5"
              fontWeight={700}
            >
              {timer.split('_').join(' ')}
            </Typography>
            <SettingsButton
              showSettings={() => setIsSettingsOpen(true)}
            />
          </Box>
          <Timer
            timer={timer}
            timersSeconds={timersSeconds}
          />
          <TimerSelect
            timer={timer}
            timersSeconds={timersSeconds}
            updateTimer={updateTimer}
          />
        </>
      }
    </ResponsiveContainer>
  )
}

Pomodoro.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>
}
