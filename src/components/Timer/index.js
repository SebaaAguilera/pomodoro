import { useState, useEffect, useCallback } from 'react'
import Box from '@mui/material/Box'
import CircularTimer from './CircularTimer'
import PlayPauseButton from './PlayPauseButton'
import ResetButton from './ResetButton'

/**
 * 
 * Timer component, it holds all the timer logic depending on the type of the timer
 * @component
 */
const Timer = ({ timer, timersSeconds }) => {
  const [isActive, setIsActive] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(0) // redundant state so the re-renders are consistent
  
  const toggleIsActive = useCallback(() => {
    setIsActive(prevIsActive => !prevIsActive)
  }, [])

  const resetTimer = useCallback(() => {
    setIsActive(false)
    setTotalSeconds(timersSeconds[timer])
    setSecondsLeft(timersSeconds[timer])
  }, [timer, timersSeconds])

  useEffect(() => {
    resetTimer()
  }, [resetTimer])

  useEffect(() => {
    let interval
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(secondsLeft => secondsLeft - 1)
      }, 1000)
    } else if (isActive && secondsLeft === 0) {
      // Handle timer completion (e.g., display a notification)
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, secondsLeft])
  
  return (
    <>
      <CircularTimer secondsLeft={secondsLeft} totalSeconds={totalSeconds}/>
      <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
        <PlayPauseButton isActive={isActive} toggle={toggleIsActive}/>
        <ResetButton reset={resetTimer}/>
      </Box>
    </>
  )
}

export default Timer