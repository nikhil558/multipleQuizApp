import {Component} from 'react'
import './index.css'

class EachHistory extends Component {
  render() {
    const {data} = this.props
    console.log(data)

    const {name, category, result, score, level} = data
    let levelColor
    if (level === 'easy') {
      levelColor = 'easy-color'
    } else if (level === 'medium') {
      levelColor = 'medium-color'
    } else {
      levelColor = 'hard-color'
    }
    const resultColor = result === 'Pass' ? 'pass-color' : 'fail-color'
    return (
      <div className="each-container">
        <p className="name-history">{name}</p>
        <p className="category-history">{category}</p>
        <p className={`level-history ${levelColor}`}>{level}</p>
        <p className={resultColor}>{result}</p>
        <p className="score-history">{score}</p>
      </div>
    )
  }
}

export default EachHistory
