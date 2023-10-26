import { useState } from 'react'
import Typography from '@mui/material/Typography'
import DefaultLayout from '@/layouts/DefaultLayout'
import SettingsButton from '@/components/SettingsButton'
import InviteButton from '@/components/InviteButton'
import Timer from '@/components/Timer'
import TimerSelect from '@/components/TimerSelect'
import TimerSettings from '@/components/TimerSettings'
import Box from '@mui/material/Box'
import ResponsiveContainer from '@/components/ResponsiveContainer'
import { defaultTimers } from '@/utils/constants'

/**
 * Pomodoro Page
 * This page features the Pomodoro Timer, Settings, and Select components.
 * It provides various options, allowing users to:
 *  - Invite a partner to their Room (a feature in progress).
 *  - Configure Pomodoro, Short Break, and Long Break timer durations.
 *  - Control the timer with options to play, pause, and reset.
 *  - Take both Short and Long breaks.
 *  - Resume the Pomodoro timer after a break.
 * 
 * On the coding side, this view is encapsulated within the same responsive container used in the Home page.
 * It consists of two main components:
 *  - The Settings component, featuring a form to modify timer values.
 *  - The Timer Box, where each component serves a specific purpose, such as opening settings, running the timer,
 *    and altering the current timer.
 * 
 * Again, a significant improvement would involve the use of colors.
 * 
 * Future Improvements:
 * The app's potential can be further enhanced by integrating a backend server,
 * allowing the tracking of user activities, including:
 *  - Settings modifications.
 *  - Number of completed or pending Pomodoros and breaks, with timer data.
 *  - Count of room participants (entering, and leaving times).
 *  - And more.
 *
 * Additionally, exploring integration with Notion tasks opens up exciting possibilities,
 * enabling productivity studies and related research.
 * @component
 */

export default function Pomodoro() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [timer, setTimer] = useState('POMODORO')
  const [timersSeconds, setTimersSeconds] = useState(defaultTimers)

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
            
            <Box>
              <InviteButton />
              <SettingsButton
                showSettings={() => setIsSettingsOpen(true)}
              />
            </Box>
          </Box>
          <Timer
            timer={timer}
            timersSeconds={timersSeconds}
          />
          <TimerSelect
            timer={timer}
            timersSeconds={timersSeconds}
            setTimer={setTimer}
          />
        </>
      }
    </ResponsiveContainer>
  )
}

// Smart approach to separate Layout and Page logic. This pattern enhances code modularity and readability
Pomodoro.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>
}
