import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import WorkIcon from '@mui/icons-material/Work'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import SyncIcon from '@mui/icons-material/Sync'
import Footer from '@/components/Footer'
import ResponsiveContainer from '@/components/ResponsiveContainer'
import Title from '@/components/Home/Title'
import CustomListItem from '@/components/Home/CustomListItem'
import HomeLayout from '@/layouts/HomeLayout'

/**
 * Home Page
 * This page provides a brief app description and gives you access to:
 *  - Create a room where you'll have access to a brand new Pomodoro timer.
 *  - Join other rooms; Please note that this feature is a work in progress.
 * 
 * On the code side, this view is contained within a responsive container, no pun intended, which centers the page content specifically in desktop mode.
 * 
 * The most significant improvement opportunity here lies in the selection of colors,
 * their application, or perhaps in decorating the page to enhance its visual appeal.
 * @component
 */
export default function Home() {

  const listItems = [
    {
      icon: <WorkIcon />,
      title: 'Simplicity Redefined:',
      description: 'Clutter-free interface for enhanced focus and minimal distractions.'
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Flexible Timers:',
      description: 'Customizable work and break durations for optimal productivity.'
    },
    {
      icon: <PeopleIcon />,
      title: 'Collaborative Workspaces:',
      description: 'Private rooms and shared links for seamless teamwork.'
    },
    {
      icon: <SyncIcon />,
      title: 'Real-Time Sync:',
      description: 'Synchronized timers for seamless collaboration and efficiency.'
    }
  ]

  return (
    <ResponsiveContainer maxWidth="sm">
      <Box sx={{ marginBottom: 4 }}>
        <Title />

        <Typography variant="body1" paragraph>
          Immerse yourself in productivity with NeuralClocks, our streamlined Pomodoro Timer, meticulously crafted by NeuralWorks Developers. Features include:
        </Typography>
        
        <List>
          {listItems.map((item, index) => (
            <CustomListItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </List>

        <Typography variant="body1" paragraph>
          Enjoy distraction-free work sessions that enhance your productivity with NeuralClocks. Experience the difference today.
        </Typography>
      </Box>

      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 3 }}>
        <Button href="/pomodoro" variant="contained">
          Create a Room
        </Button>
        <Button variant="outlined">
          Join a Room
        </Button>
      </Box>
    </ResponsiveContainer>
  )
}

// Smart approach to separate Layout and Page logic. This pattern enhances code modularity and readability
Home.getLayout = function(page) {
  return <HomeLayout>{ page }</HomeLayout>
}
