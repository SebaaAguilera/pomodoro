import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

const Timer = ({ secondsLeft, totalSeconds }) => {
  
  const progress = getProgress(secondsLeft / totalSeconds)

  const remainingMinutes = getMinutes(secondsLeft)
  const remainingSeconds = getSecondsRest(secondsLeft)
  const formattedTime = getFormattedTime({ minutes: remainingMinutes, seconds: remainingSeconds })

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress
          variant="determinate"
          value={progress}
          size={250}
          thickness={4}
          // style={{ color: theme.palette.primary.main }}
        />
        <Typography
          variant="h3"
          component="div"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // color: theme.palette.text.primary,
          }}
        >
          {formattedTime}
        </Typography>
    </div>
  )
}

const getMinutes = (seconds) => {
  return Math.floor(seconds / 60)
}

const getSecondsRest = (seconds) => {
  return seconds % 60
}

const getCuratedMeasure = (measure) => {
  return String(measure).padStart(2, '0')
}

const getFormattedTime = ({ minutes, seconds }) => {
  const curatedMinutes = getCuratedMeasure(minutes)
  const curatedSeconds = getCuratedMeasure(seconds)
  return `${curatedMinutes} : ${curatedSeconds}`
}

const getProgress = ({ value, total }) => {
  return (value / total) * 100
}

export default Timer