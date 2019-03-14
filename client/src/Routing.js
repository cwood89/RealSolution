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
import SignUp from "./pages/signupPage"
import Login from "./pages/loginPage"
import PrivateRoute from "./components/privateRoute"
import API from "./utils/API";

class RouteControl extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: true // set to false in production
    }
    this.LogIn = this.LogIn.bind(this)
  }

  LogIn(user) {
    API.LogIn(user).then((res) => {
      if (res.success) {
        this.setState({
          isAuthenticated: true
        })
        return < Redirect to="/otl" />

      }
    })
  }

  logOut() { }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/public" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute
              exact path="/otl" component={OTLresults} isAuthenticated={this.state.isAuthenticated} />
            <PrivateRoute exact path="/comps/:id" component={CompResults} isAuthenticated={this.state.isAuthenticated} />
            <PrivateRoute exact path="/about" component={About} isAuthenticated={this.state.isAuthenticated} />
            <PrivateRoute exact path="/profile" component={Profile} isAuthenticated={this.state.isAuthenticated} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RouteControl;


// // authorization (object)
// const fakeAuth = {
//   isAuthenticated: false,
//   // set to true in 100ms ???? why async???
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   // vice versa
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };


