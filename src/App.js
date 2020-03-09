import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Login2 from './Login/Login2';
import App2 from './Signup/App2';
import App3 from './Signup/App3';
import Forgotpassword1 from './Forgotpassword/Forgotpassword1';
import Dashboard1 from './Dashboard/Dashboard1';

export default class Mandee extends React.Component {
    /*constructor(){
      super();

      this.state ={
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      }
    }*/
    render(){
    return (
      <Router>
       <header id="page-header" class="navbar navbar-expand-sm flex-column flex-md-row justify-content-between">
        <a class="navbar-brand mr-0" href="/"><img class="logo" alt="Mandee MIS logo" src="http://mis.mandeeonline.com/images/logo.png"/></a> 
        <div class="navbar-nav flex-row">
          <Link to="/Signin" class="nav-item nav-link ml-2 ml-md-0 mr-2">Login</Link>
          <div class="form-inline d-none ml-2 d-md-block">
          <Link to="/" class="btn btn-outline-info">Signup</Link>
          </div>
       </div>
        </header>
         {/*<ul>
          <li>
            <Link to="/">Signin</Link>
          </li>
          <li>
            <Link to="/Signin">login</Link>
          </li>
         </ul>*/}
         <Switch>
          <Route exact path="/">
            <App />
          </Route>
           <Route path="/Signin">
            <Signin/>
           </Route>
           <Route path="/Dashboard">
           <Dashboard/>
           </Route>
          <Route path="/Forgotpassword">
            <Forgotpassword />
          </Route>
         </Switch>
      </Router>
      
    );
  }
}

function App() {
  return (
    <div>
      <div>
      <App2 />
        <App3 />
      </div>
    </div>
  );
}

function Signin() {
  return (
    <div>
        <Login2 />
    </div>
  );
}

function Forgotpassword(){
  return(
    <div>
       <Forgotpassword1 />
    </div>

  );
}
function Dashboard(){
  return(
    <div>
      <Dashboard1 />
    </div>

  )
}