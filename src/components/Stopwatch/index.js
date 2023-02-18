// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  time = () => {
    const {minutes, seconds} = this.state
    const totalMinutes = Math.floor(seconds / 60)
    const totalSeconds = Math.floor(seconds % 60)
    const stringMinutes = totalMinutes > 9 ? totalMinutes : `0${totalMinutes}`
    const stringSeconds = totalSeconds > 9 ? totalSeconds : `0${totalSeconds}`
    return `${stringMinutes}:${stringSeconds}`
  }

  startStopwatch = () => {
    const {minutes, seconds} = this.state
    this.timerId = setInterval(() => {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }, 1000)
  }

  stopStopwatch = () => {
    clearInterval(this.timerId)
  }

  resetStopwatch = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="bg-image">
        <h1>Stopwatch</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <h1>Timer</h1>
          <h1>{this.time()}</h1>
          <button type="button" onClick={this.startStopwatch}>
            Start
          </button>
          <button type="button" onClick={this.stopStopwatch}>
            Stop
          </button>
          <button type="button" onClick={this.resetStopwatch}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
