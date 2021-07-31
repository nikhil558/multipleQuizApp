import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import History from './components/History'
import NotFound from './components/NotFound'
import Result from './components/Result'
import Quiz from './components/Quiz'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/result" component={Result} />
      <Route exact path="/history" component={History} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
