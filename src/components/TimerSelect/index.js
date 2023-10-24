import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'
import { getTimeFromSeconds } from '@/utils/time'

const TimerSelect = ({ timer, timersSeconds, updateTimer }) => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const isPomodoro = timer === 'POMODORO'
  const shortBreakTime = getTimeFromSeconds(timersSeconds.SHORT_BREAK)
  const longBreakTime = getTimeFromSeconds(timersSeconds.LONG_BREAK)

  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 10
      }}>
      {
        isPomodoro ?
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={updateTimer("SHORT_BREAK")}
            sx={{ width: isMobile ? "100%" : "50%" }}
          >
            Short break - { shortBreakTime }
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={updateTimer("LONG_BREAK")}
            sx={{ width: isMobile ? "100%" : "50%" }}
          >
            Long break - { longBreakTime }
          </Button>
        </>
        :
        <Button
          variant="outlined"
          color="primary"
          onClick={updateTimer("POMODORO")}
          fullWidth
          >
          Back to Pomodoro
        </Button>
      }
    </div>
  )
}

export default TimerSelect