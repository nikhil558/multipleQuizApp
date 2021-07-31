import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <li className="nav-header">
    <div className="nav-content">
      <Link to="/" className="logo">
        <p className="website-logo">TestPress</p>
      </Link>
      <ul className="nav-menu">
        <Link to="/" className="nav-home">
          <li>Home</li>
        </Link>
        <Link to="/history" className="nav-home">
          <li>History</li>
        </Link>
      </ul>
    </div>
  </li>
)

export default withRouter(Header)
