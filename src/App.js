import './App.css';
import SignUp from './signup';
import Base from './base';
import Login from './login';
import Profile from './Profile';

// import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to={{pathname: "/login"}}/>
        {/* <Base></Base> */}
      </Route>
      <Switch>
      <Route path= {"/signup"}>
        <SignUp/>
      </Route>
      <Route path= {"/login"}>
        <Login/>
      </Route>
      <Route path= "/profile/:username">
        <Profile/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
