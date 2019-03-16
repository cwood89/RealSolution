import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./signupPage";
import Login from "./loginPage";


function Landing(props) {
  return (
    <Router>
      <div>
        <h1>Real Solution</h1>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>


        <Route path="/login" render={() => <Login authorize={props.authorize} />} />
        <Route path="/signup" render={() => <SignUp authorize={props.authorize} />} />
      </div>
    </Router>
  );
}

export default Landing;