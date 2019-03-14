import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./signupPage";
import Login from "./loginPage";

function Landing() {
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
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default Landing;