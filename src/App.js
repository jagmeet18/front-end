import './App.css';
import SignUp from './signup';
import Base from './base';
import Login from './login';
import { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="buttons">
      <Base></Base>
    </div>
    <Switch>
      <Route path= {"/signup"}>
        <SignUp></SignUp>
      </Route>
      <Route path= {"/login"}>
        <Login></Login>
      </Route>
    </Switch>
    
  </Router>
  );
}

export default App;
