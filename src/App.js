import './App.css';
import SignUp from './signup';
import Login from './login';
import Profile from './Profile';
import VS from './create_virtualSpace';
import PopUp from './popup';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to={{pathname: "/login"}}/>
      </Route>

      <Switch>
        <Route path= {"/signup"}>
          <SignUp/>
        </Route>
        <Route path= {"/login"}>
          <Login/>
        </Route>
        <Route path="/Vs">
          <VS/>
        </Route>
        <Route path="/popup">
          <PopUp/>
        </Route>
        <Route path= "/profile/:username">
          <Profile/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
