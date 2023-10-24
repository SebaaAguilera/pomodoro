import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getTimeFromSeconds } from '@/utils/time'

/**
 * 
 * @param {{
 *  value: Number,
 *  total: Number
 * }}
 * @returns Progress percentage
 */
const getProgress = ({ value, total }) => {
  return total <= 0 ? 0 : (value / total) * 100
}

/**
 * CircularTimer component, shows left time depending on its arguments 
 * @component
 */
const CircularTimer = ({ secondsLeft, totalSeconds }) => {
  
  const progress = getProgress({ value: secondsLeft, total: totalSeconds })
  const formattedTime = getTimeFromSeconds(secondsLeft)

  return (
    <Box style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress
          variant="determinate"
          value={progress}
          size={250}
          thickness={4}
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
    </Box>
  )
}



export default CircularTimer