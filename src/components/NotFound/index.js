import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  navigateHome = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    return (
      <div>
        <div className="notfound-container">
          <div className="notfound-inner-container">
            <img
              src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1625129614/Group_7484_tobxz2.svg"
              alt="error"
              className="notfound-img"
            />
            <h1 className="notfound-heading">PAGE NOT FOUND</h1>
            <p className="notfound-para">
              we’re sorry, the page you requested could not be found
              <br />
              Please go back to the homepage
            </p>
            <button
              type="button"
              className="notfound-btn"
              onClick={this.navigateHome}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
