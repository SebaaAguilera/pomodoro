import Container from '@mui/material/Container'
import { styled } from '@mui/system'

// Responsive Design so it fits the device
const ResponsiveContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    marginBottom: 4
  },
}))

export default ResponsiveContainer
