import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import SignUp from "./signupPage";
import Login from "./loginPage";
import PrivateRoute from "../components/privateRoute"
import OTLresults from "./OTLresults";
import API from "../utils/API"
let isAuthorized = API.verify()

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

        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <PrivateRoute isAuthorized={isAuthorized} exact path="/otl" component={OTLresults} />
        </Switch>
      </div>
    </Router>
  );
}

export default Landing;