import React, { Component } from "react";
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



class RouteControl extends Component {
  constructor() {
    super()
    this.state = {
      isAuthorized: false
    }
    this.authorize = this.authorize.bind(this);
    this.logOut = this.logOut.bind(this);

  }

  authorize() {
    this.setState({ isAuthorized: true })
    console.log(this.state
    )
  }

  logOut() {
    this.setState({ isAuthorized: false })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Landing authorize={this.authorize} />} />
            <Route exact path="/login" render={() => <Landing authorize={this.authorize} />} />
            <Route exact path="/signup" render={() => <Landing authorize={this.authorize} />} />
            <PrivateRoute isAuthorized={this.state.isAuthorized} exact path="/otl" component={OTLresults} />
            <PrivateRoute isAuthorized={this.state.isAuthorized} exact path="/comps/:id" component={CompResults} />
            <PrivateRoute isAuthorized={this.state.isAuthorized} exact path="/about" component={About} />
            <PrivateRoute isAuthorized={this.state.isAuthorized} exact path="/profile" component={Profile} />
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
}

export default RouteControl;
