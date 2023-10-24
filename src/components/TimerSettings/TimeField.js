import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField'
import { getMinutes, getSecondsRest } from '@/utils/time'

/**
 * TimeField component represents a controlled time input field.
 * @component
 */
const TimeField = ({ label, value, onChange }) => {
  
  const [minutes, setMinutes] = useState(getMinutes(value))
  const [seconds, setSeconds] = useState(getSecondsRest(value))

  useEffect(() => {
    setMinutes(getMinutes(value))
    setSeconds(getSecondsRest(value))
  }, [value])

  const handleMinutesChange = (e) => {
    const newMinutes = parseInt(e.target.value) || 0;
    setMinutes(newMinutes);
    onChange(newMinutes * 60 + seconds);
  };

  const handleSecondsChange = (e) => {
    const newSeconds = parseInt(e.target.value) || 0;
    setSeconds(newSeconds);
    onChange(minutes * 60 + newSeconds);
  };

  return (
    <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
      <Box sx={{ flex: 1 }}>
        <InputLabel>{label}</InputLabel>
      </Box>
      <Box sx={{ flex: 1 }}>
        <TextField
          type="number"
          fullWidth
          sx={{ marginBottom: '10px' }}
          value={minutes}
          onChange={handleMinutesChange}
          inputProps={{ min: 0 }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <TextField
          type="number"
          fullWidth
          sx={{ marginBottom: '10px' }}
          value={seconds}
          onChange={handleSecondsChange}
          inputProps={{ min: 0, max: 59 }}
        />
      </Box>
    </Box>
  )
}

export default TimeField