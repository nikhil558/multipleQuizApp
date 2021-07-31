import {Component} from 'react'
import './index.css'

class QuizCategory extends Component {
  testStarting = event => {
    const {param} = event.target.dataset
    const {onClickFun} = this.props
    onClickFun(param)
  }

  render() {
    const {eachCategory} = this.props
    const {projectId, imageURL, title, category} = eachCategory
    return (
      <>
        <li className="project-item-container">
          <img
            className="project-item-image"
            src={imageURL}
            alt={`project-item ${projectId}`}
          />
          <div className="project-item-details-container">
            <h1 className="project-item-title">{title}</h1>
            <button
              type="button"
              className="start-btn"
              data-param={category}
              onClick={this.testStarting}
            >
              Start Test
            </button>
          </div>
        </li>
      </>
    )
  }
}

export default QuizCategory
