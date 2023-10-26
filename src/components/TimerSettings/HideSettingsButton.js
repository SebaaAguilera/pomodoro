import Button from '@mui/material/Button'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HideSettingsButton = ({ hideSettings }) => {
  return (
    <Button
      variant="text"
      onClick={hideSettings}
      startIcon={<ChevronLeftIcon />}
    >
      Back
    </Button>
  )
}

export default HideSettingsButton
