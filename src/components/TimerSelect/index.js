import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'
import { getTimeFromSeconds } from '@/utils/time'

/**
 * 
 * TimerSelect component, it displays the needed buttons to change the type of timer
 * @component 
 */
const TimerSelect = ({ timer, timersSeconds, setTimer }) => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const isPomodoro = timer === 'POMODORO'
  const shortBreakTime = getTimeFromSeconds(timersSeconds.SHORT_BREAK)
  const longBreakTime = getTimeFromSeconds(timersSeconds.LONG_BREAK)

  return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: isMobile ? '100px' : 0,
        gap: 2
      }}>
      {
        isPomodoro ?
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setTimer('SHORT_BREAK')}
            sx={{ width: isMobile ? '100%' : '50%' }}
            >
            Short break - { shortBreakTime }
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setTimer('LONG_BREAK')}
            sx={{ width: isMobile ? '100%' : '50%' }}
          >
            Long break - { longBreakTime }
          </Button>
        </>
        :
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setTimer('POMODORO')}
          fullWidth
          >
          Back to Pomodoro
        </Button>
      }
    </Box>
  )
}

export default TimerSelect