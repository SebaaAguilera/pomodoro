import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import WorkIcon from '@mui/icons-material/Work'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import SyncIcon from '@mui/icons-material/Sync'
import Footer from '@/components/Footer'

/**
 * 
 * CustomListItem, it wraps the item icon and content
 * @component
 */
function CustomListItem({ children, icon }) {
  return (
    <ListItem>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
        {children}
      </ListItemText>
    </ListItem>
  );
}

/**
 * 
 * Home page, it shows the site description
 * @component
 */
export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
      >
      
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h2"
          component="div"
          fontWeight={700}
          sx={{ marginTop: 10, marginBottom: 4 }}
          >
          NeuralClocks
        </Typography>

        <Typography variant="body1" paragraph>
          Immerse yourself in productivity with NeuralClocks, our streamlined Pomodoro Timer, meticulously crafted by NeuralWorks Developers. Features include:
        </Typography>
        
        <List>
          <CustomListItem icon={<WorkIcon />} >
            <strong>Simplicity Redefined:</strong> Experience a clutter-free interface that sharpens your focus, eliminating distractions.
          </CustomListItem>
          <CustomListItem icon={<AccessTimeIcon />} >
            <strong>Flexible Timers:</strong> Tailor work and break durations to match your workflow, ensuring peak productivity.
          </CustomListItem>
          <CustomListItem icon={<PeopleIcon />} >
            <strong>Collaborative Workspaces:</strong> Create private rooms and share unique links with friends or colleagues for seamless teamwork.
          </CustomListItem>
          <CustomListItem icon={<SyncIcon />} >
            <strong>Real-Time Sync:</strong> Stay in perfect harmony with peers through synchronized timers, enabling seamless collaboration.
          </CustomListItem>
        </List>

        <Typography variant="body1" paragraph>
          Enjoy distraction-free work sessions that enhance your productivity with NeuralClocks. Experience the difference today.
        </Typography>
      </Box>

      
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 15 }}>
        <Button href="/pomodoro" variant="contained" color="primary">
          Create a Room
        </Button>
        <Button href="/" variant="outlined" color="primary">
          Join a Room
        </Button>
      </Box>
    </Container>
  )
}


Home.getLayout = function(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
