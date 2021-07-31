import {Component} from 'react'
import './index.css'

const randomID = () => Math.random().toString(36).substring(7)

class Timer extends Component {
  state = {
    timerLimitInMinutes: 3,
    timeElapsedInSeconds: 0,
  }

  componentDidMount() {
    const mountId = randomID()
    console.log(mountId)
    this.intervalId = setInterval(
      () => this.onTimerLimitInMinutesIncrement(),
      1000,
    )
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onTimerLimitInMinutesIncrement = () =>
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))

  timeOver = () => {
    const {timeCompleted} = this.props
    timeCompleted()
  }

  render() {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const totalRemainingSeconds =
      timerLimitInMinutes * 60 - timeElapsedInSeconds
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    if (totalRemainingSeconds === 0) {
      this.timeOver()
      this.clearTimerInterval()
    }
    return (
      <div className="elapsed-time-container">
        <h1 className="elapsed-time">
          {`${stringifiedMinutes}:${stringifiedSeconds}`}
        </h1>
        <p className="timer-state">Left</p>
      </div>
    )
  }
}

export default Timer
