import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'
import AvTimerIcon from '@mui/icons-material/AvTimer'

/**
 * Responsive Title component
 * @component
 */
const Title = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const variant = isMobile ? 'h3' : 'h2'

  return (
    <Typography
      variant={variant}
      component="div"
      fontWeight={700}
      sx={{ marginTop: 4, marginBottom: 1, display: 'flex', alignItems: 'center' }}
    >
      <AvTimerIcon fontSize="inherit"/>
      NeuralClocks
    </Typography>
  )
}

export default Title
