import Button from '@mui/material/Button'

const TimerSelect = ({ timer, updateTimer }) => {
  const isPomodoro = timer === 'POMODORO'
  return (
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: 10 }}>
      {
        isPomodoro ?
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={updateTimer("SHORT_BREAK")}
          >
            Short break
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={updateTimer("LONG_BREAK")}
          >
            Long break
          </Button>
        </>
        :
        <Button
          variant="outlined"
          color="primary"
          onClick={updateTimer("POMODORO")}
          >
          Back to Pomodoro
        </Button>
      }
    </div>
  )
}

export default TimerSelect