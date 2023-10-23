import { useState, useEffect, useCallback } from 'react'
import Timer from './Timer'
import PlayPauseButton from './PlayPauseButton'
import ResetButton from './ResetButton'

const POMODORO_TIME = 25 * 60 // 25 minutes in seconds

const PomodoroTimer = () => {

  const [isActive, setIsActive] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(POMODORO_TIME)

  const toggleTimer = useCallback(() => {
    setIsActive(prevIsActive => !prevIsActive)
  }, [])

  const resetTimer = useCallback(() => {
    setIsActive(false)
    setSecondsLeft(POMODORO_TIME)
  }, [])

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
      <Timer isActive={isActive} secondsLeft={secondsLeft} totalSeconds={POMODORO_TIME}/>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <PlayPauseButton isActive={isActive} toggle={toggleTimer}/>
        <ResetButton reset={resetTimer}/>
      </div>
    </>
  )
}

export default PomodoroTimer