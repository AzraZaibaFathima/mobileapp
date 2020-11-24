import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './mobileworld/login/Login'
import Home from './mobileworld/home/Home'
import Show from './mobileworld/show/Show'
  
function App() {
  return (
    <div>     
      <Router>

       <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/show" component={Show}/>
        <Route path="/home" component={Home}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
