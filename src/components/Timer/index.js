import { useState, useEffect, useCallback } from 'react'
import CircularTimer from './CircularTimer'
import PlayPauseButton from './PlayPauseButton'
import ResetButton from './ResetButton'

const PomodoroTimer = ({ timer, timersSeconds }) => {
  const [isActive, setIsActive] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  
  const toggleTimer = useCallback(() => {
    setIsActive(prevIsActive => !prevIsActive)
  }, [])

  const resetTimer = useCallback(() => {
    setIsActive(false)
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
      <CircularTimer isActive={isActive} secondsLeft={secondsLeft} totalSeconds={timersSeconds[timer]}/>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <PlayPauseButton isActive={isActive} toggle={toggleTimer}/>
        <ResetButton reset={resetTimer}/>
      </div>
    </>
  )
}

export default PomodoroTimer