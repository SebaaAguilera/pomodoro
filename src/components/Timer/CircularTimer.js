import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { getTimeFromSeconds } from '@/utils/time'

const getProgress = ({ value, total }) => {
  return (value / total) * 100
}

const Timer = ({ secondsLeft, totalSeconds }) => {
  
  const progress = getProgress({ value: secondsLeft, total: totalSeconds })
  const formattedTime = getTimeFromSeconds(secondsLeft)

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress
          variant="determinate"
          value={progress}
          size={250}
          thickness={4}
          sx={{ clipPath: 'circle(50% at 50% 50%)' }}
        />
        <Typography
          variant="h2"
          component="div"
          fontWeight={700}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {formattedTime}
        </Typography>
    </div>
  )
}



export default Timer