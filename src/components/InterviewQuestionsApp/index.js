import {Component} from 'react'
import Timer from '../Timer'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'

class InterviewQuestionsApp extends Component {
  state = {
    questionsList: [],
    count: 0,
    storeQnsData: [],
  }

  componentDidMount() {
    this.getQuetions()
  }

  getQuetions = async () => {
    const {level, categoryNo} = this.props
    const api = `https://opentdb.com/api.php?amount=10&category=${categoryNo}&difficulty=${level}&type=multiple`
    const options = {
      method: 'GET',
    }
    const response = await fetch(api, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.results.map(quetion => ({
      questions: quetion.question,
      correctAnswer: quetion.correct_answer,
      wrongAnswers: quetion.incorrect_answers,
    }))
    this.setState({questionsList: updatedData})
  }

  addDataToFDatabase = async () => {
    const {storeQnsData, count} = this.state
    const {userName} = this.props
    const resultStatus = count >= 6 ? 'Pass' : 'Fail'
    const userDetails = {
      name: userName,
      first: storeQnsData[0],
      second: storeQnsData[1],
      third: storeQnsData[2],
      fourth: storeQnsData[3],
      fifth: storeQnsData[4],
      sixth: storeQnsData[5],
      seventh: storeQnsData[6],
      eight: storeQnsData[7],
      ninth: storeQnsData[8],
      tenth: storeQnsData[9],
      result: resultStatus,
      score: count,
    }
    const url = 'https://quiz-application-server.herokuapp.com/results'
    const options = {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)
  }

  countingFun = () => {
    this.setState(prevCount => ({count: prevCount.count + 1}))
  }

  dataFun = value => {
    const {storeQnsData} = this.state
    storeQnsData.push(value)
    this.setState((storeQnsData: storeQnsData))
  }

  totalScore = () => {
    const {count} = this.state
    const {onSubmitTest} = this.props
    alert('Are you sure submit the test')
    onSubmitTest(count)
    this.addDataToFDatabase()
  }

  timeCompleted = () => {
    const {count} = this.state
    const {onSubmitTest} = this.props
    onSubmitTest(count)
    this.addDataToFDatabase()
  }

  render() {
    const {questionsList} = this.state
    return (
      <div className="app-container">
        <div className="heading-container">
          <h1 className="heading">10 Questions for 3:00 Minutes</h1>
          <Timer timeCompleted={this.timeCompleted} />
        </div>
        <div className="filter-container">
          <div className="questions-container">
            {questionsList.map(eachQuestion => (
              <InterviewQuestion
                question={eachQuestion}
                countingFun={this.countingFun}
                dataFun={this.dataFun}
              />
            ))}
          </div>
        </div>
        <div className="submission_container">
          <button type="button" className="button" onClick={this.totalScore}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
