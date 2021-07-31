import {Component} from 'react'

import QuizCategory from '../QuizCategory'

import './index.css'

const categoryList = [
  {
    projectId: 0,
    category: 18,
    imageURL:
      'https://image.freepik.com/free-vector/combination-circuit-head-shape-artificial-intelligence-moral-electronic-world-illustration_456031-123.jpg',
    title: 'Computers',
  },
  {
    projectId: 1,
    category: 9,
    imageURL:
      'https://image.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg',
    title: 'General Knowledge',
  },
  {
    projectId: 2,
    category: 19,
    imageURL:
      'https://image.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg',
    title: 'Mathematics',
  },
  {
    projectId: 4,
    category: 23,
    imageURL:
      'https://img.freepik.com/free-photo/elevated-view-magnifying-glass-burnt-paper-knife-map_23-2147837103.jpg?size=338&ext=jpg',
    title: 'History',
  },
  {
    projectId: 5,
    category: 17,
    imageURL:
      'https://image.freepik.com/free-vector/science-concept-line-vector-image_98292-2326.jpg',
    title: 'Science & Nature',
  },
  {
    projectId: 6,
    category: 21,
    imageURL:
      'https://image.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148995776.jpg',
    title: 'Sports',
  },

  {
    projectId: 8,
    category: 20,
    imageURL:
      'https://image.freepik.com/free-vector/ancient-greek-gods-goddesses-set-set-illustration_74855-14273.jpg',
    title: 'Mythology',
  },
  {
    projectId: 9,
    category: 14,
    imageURL:
      'https://image.freepik.com/free-vector/vintage-tv_23-2147503075.jpg',
    title: 'Television',
  },
  {
    projectId: 10,
    category: 24,
    imageURL:
      'https://image.freepik.com/free-vector/election-political-campaign_74855-6383.jpg',
    title: 'Politics',
  },
]

class Home extends Component {
  onClickFun = param => {
    const {history} = this.props
    history.push(`/quiz`, {categoryNo: param})
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="title">Multiple Quizs</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and
          abilities.Know the talent by writing the Quiz.
        </p>

        <ul className="project-list-container">
          {categoryList.map(eachCategory => (
            <QuizCategory
              key={eachCategory.projectId}
              eachCategory={eachCategory}
              onClickFun={this.onClickFun}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
