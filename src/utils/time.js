const getMinutes = (seconds) => {
  return Math.floor(seconds / 60)
}

const getSecondsRest = (seconds) => {
  return seconds % 60
}

const getCuratedMeasure = (measure) => {
  return String(measure).padStart(2, '0')
}

const getFormattedTime = ({ minutes, seconds }) => {
  const curatedMinutes = getCuratedMeasure(minutes)
  const curatedSeconds = getCuratedMeasure(seconds)
  return `${curatedMinutes}:${curatedSeconds}`
}

export const getTimeFromSeconds = (seconds) => {
  const remainingMinutes = getMinutes(seconds)
  const remainingSeconds = getSecondsRest(seconds)
  return getFormattedTime({ minutes: remainingMinutes, seconds: remainingSeconds })
}
