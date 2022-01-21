import './App.css';
import SignUp from './signup';
import Base from './base';
import Login from './login';
import Profile from './Profile';
// import { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
  <Router>
    <Route exact path= "/">
      <Base></Base>
    </Route>
    <Switch>
      <Route path= {"/signup"}>
        <SignUp></SignUp>
      </Route>
      <Route path= {"/login"}>
        <Login></Login>
      </Route>
      <Route path= "/profile/:username">
        <Profile/>
      </Route>
    </Switch>
    
  </Router>
  );
}

export default App;
