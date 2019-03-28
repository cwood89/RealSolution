import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import OTLresults from "./pages/OTLresults";
import CompResults from "./pages/CompResults";
import About from "./pages/About";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/privateRoute";
import Landing from "./pages/landingPage"
import Login from "./pages/loginPage";
import SignUp from "./pages/signupPage";
function RouteControl() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/otl" component={OTLresults} />
          <PrivateRoute exact path="/about" component={About} />
          <PrivateRoute exact path="/comps/:id/:address/:city/:zip/:subdivision" component={CompResults} />
          <PrivateRoute exact path="/profile" component={Profile} />

        </Switch>
      </div>
    </Router>
  )
}

export default RouteControl;
