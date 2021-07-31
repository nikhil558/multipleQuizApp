import {Component} from 'react'
import InterviewQuestionsApp from '../InterviewQuestionsApp'
import DifficultyLevel from '../DifficultyLevel'

const multipleQuiz = [
  {category: '18', title: 'Computers'},
  {category: '9', title: 'General Knowledge'},
  {category: '19', title: 'Mathematics'},
  {category: '23', title: 'History'},
  {category: '17', title: 'Science & Nature'},
  {category: '21', title: 'Sports'},
  {category: '20', title: 'Mythology'},
  {category: '14', title: 'Television'},
  {category: '24', title: 'Politics'},
]

class Quiz extends Component {
  state = {
    selectDifficulty: false,
    level: '',
    name: '',
  }

  createLevel = (value, enterName) => {
    this.setState({level: value, selectDifficulty: true, name: enterName})
  }

  onSubmitTest = value => {
    const {history} = this.props
    history.push('/result', {score: value})
  }

  render() {
    const {selectDifficulty, level, name} = this.state
    const {location} = this.props
    const {state} = location
    const {categoryNo} = state
    console.log(typeof categoryNo)
    const testTitle = multipleQuiz.filter(each => each.category === categoryNo)
    console.log(testTitle)
    return (
      <>
        {selectDifficulty ? (
          <InterviewQuestionsApp
            level={level}
            categoryNo={categoryNo}
            onSubmitTest={this.onSubmitTest}
            userName={name}
          />
        ) : (
          <DifficultyLevel
            createLevel={this.createLevel}
            testTitle={testTitle}
          />
        )}
      </>
    )
  }
}

export default Quiz
