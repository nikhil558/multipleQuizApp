import {Component} from 'react'
import EachHistory from '../EachHistory'
import './index.css'

class History extends Component {
  state = {
    dataHistory: [],
    dataShown: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const api = 'https://quiz-application-server.herokuapp.com/history'
    const options = {
      method: 'GET',
    }
    const response = await fetch(api, options)
    const fetchedData = await response.json()

    // console.log(fetchedData)

    this.setState({dataHistory: fetchedData, dataShown: true})
  }

  render() {
    const {dataHistory, dataShown} = this.state
    dataHistory.reverse()
    if (dataHistory.length === 0) {
      return (
        <div className="history-bg-container">
          <div className="history-container">{dataShown && <p>Empty</p>}</div>
        </div>
      )
    }
    return (
      <div className="history-bg-container">
        <div className="history-container">
          {dataShown &&
            dataHistory.map(each => <EachHistory key={each.id} data={each} />)}
        </div>
      </div>
    )
  }
}

export default History
