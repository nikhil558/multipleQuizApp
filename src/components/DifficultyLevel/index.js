import {Component} from 'react'

import './index.css'

class DifficultyLevel extends Component {
  state = {
    enterName: '',
  }

  changeStateLanguage = event => {
    const {value} = event.target
    const {createLevel} = this.props
    const {enterName} = this.state

    createLevel(value, enterName)
  }

  onName = event => {
    this.setState({enterName: event.target.value})
  }

  render() {
    const {enterName} = this.state
    const {testTitle} = this.props
    return (
      <div className="background-container">
        <div className="content">
          <h1 className="main-heading">
            {' '}
            {`${testTitle[0].title} Quiz application`}
          </h1>
          <div className="name-field-container">
            <label htmlFor="name" className="name-label">
              Enter name
            </label>
            <input
              type="text"
              id="name"
              className="name-field"
              value={enterName}
              onChange={this.onName}
            />
          </div>

          <div className="difficulty-content">
            <h1 className="difficulty-heading">Select Difficulty Level</h1>
            <div className="buttons-container">
              <button
                className="button-level"
                type="button"
                value="easy"
                key="1"
                onClick={this.changeStateLanguage}
              >
                Easy
              </button>
              <button
                className="button-level"
                type="button"
                value="medium"
                key="2"
                onClick={this.changeStateLanguage}
              >
                Medium
              </button>
              <button
                className="button-level"
                type="button"
                value="hard"
                key="3"
                onClick={this.changeStateLanguage}
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DifficultyLevel
