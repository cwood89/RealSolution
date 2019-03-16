import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import OTLresults from "./pages/OTLresults";
import CompResults from "./pages/CompResults";
import About from "./pages/About";
import Profile from "./pages/Profile"
import Landing from "./pages/landingPage"
import PrivateRoute from "./components/privateRoute"



function RouteControl(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/login" render={() => <Landing />} />
          <Route exact path="/signup" render={() => <Landing />} />
          <PrivateRoute exact path="/otl" component={OTLresults} />
          <PrivateRoute exact path="/comps/:id" component={CompResults} />
          <PrivateRoute exact path="/about" component={About} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="*" render={() => {
            return (
              <h1>404 NOT FOUND</h1>
            )
          }} />
        </Switch>
      </div>
    </Router>
  );
}


export default RouteControl;
