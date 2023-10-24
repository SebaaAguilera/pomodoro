import { useCallback, useState } from 'react'
import Container from '@mui/material/Container'
import DefaultLayout from '@/layouts/DefaultLayout'
import SettingsButton from '@/components/SettingsButton'
import Timer from '@/components/Timer'
import TimerSelect from '@/components/TimerSelect'
import TimerSettings from '@/components/TimerSettings'


export default function Home() {
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
    <Container maxWidth="sm" sx={{ marginTop: "20px"}}>
      {
        isSettingsOpen ?
        <TimerSettings
          timersSeconds={timersSeconds}
          setTimersSeconds={setTimersSeconds}
          hideSettings={() => setIsSettingsOpen(false)}
        />
        :
        <>
          <div style={{ display: "flex", justifyContent: "right"}}>
            <SettingsButton
              showSettings={() => setIsSettingsOpen(true)}
            />
          </div>
          <Timer
            timer={timer}
            timersSeconds={timersSeconds}
          />
          <TimerSelect
            timer={timer}
            updateTimer={updateTimer}
          />
        </>
      }
    </Container>
  )
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>
}
