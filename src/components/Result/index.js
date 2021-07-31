import {Component} from 'react'
import './index.css'

const LOSE_IMAGE =
  'https://image.freepik.com/free-photo/ripped-paper-with-fail-text_9083-4738.jpg'
const WON_IMAGE =
  'https://image.freepik.com/free-vector/passed-stamp_1017-8239.jpg'

class Result extends Component {
  onClickPlayAgain = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    const {location} = this.props
    const {state} = location
    const {score} = state
    const imageUrl = score >= 6 ? WON_IMAGE : LOSE_IMAGE
    const gameStatus = score >= 6 ? 'You Pass' : 'You Fail'
    const scoreLabel = score >= 6 ? 'Best Score' : 'Score'

    return (
      <div className="result-container">
        <div className="win-or-lose-card">
          <div className="details-section">
            <h1 className="game-status">{gameStatus}</h1>
            <p className="current-score-label">{scoreLabel}</p>
            <p className="current-score-value">{score}/10</p>
            <button
              type="button"
              className="play-again-button"
              onClick={this.onClickPlayAgain}
            >
              Try Again
            </button>
          </div>
          <div className="image-section">
            <img
              className="win-or-lose-image"
              src={imageUrl}
              alt="win or lose"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Result
