import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

/**
 * 
 * CustomListItem, it wraps the item icon and content
 * @component
 */
const  CustomListItem = ({ children, icon }) => {
  return (
    <ListItem>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
        {children}
      </ListItemText>
    </ListItem>
  )
}

export default CustomListItem
