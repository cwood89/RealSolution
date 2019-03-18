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
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation" >
          <div className="navbar-brand">
            <a className="navbar-item">
              <div className="mainBrand"><a href="/">Real Solution</a></div>
            </a>
          </div>

        <div className="navbar-end">
          <ul>
            <li>
              <a className="navbar-item" ><Link  to="/login">Log In</Link></a>
            </li>
            <li>
              <a className="navbar-item" ><Link  to="/signup">Sign Up</Link></a>
            </li>
          </ul>
        </div>
      </nav>
        <div> 
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <PrivateRoute isAuthorized={isAuthorized} exact path="/otl" component={OTLresults} />
        </Switch>
        </div>
        <section className="landingTextWriteup">
            <div className="container is-half landing0">
              <h1 className="animated fadeInLeft">Invest Wisely</h1>
              <p className="animated fadeInRight">Real Solution is a service which allows you to find investment properties quickly, manage them intelligently, and stay on track in a competitive market</p>
            </div>
            {/* {() => {setTimeout(document.getElementById('buttonPlace').style.display = {display: 'block'}, 2000)}} */}
            <div className="container is-half" id="buttonPlace">
                  <button className="button is-primary animated fadeInLeft"><a className="" ><Link  to="/login">Log In</Link></a></button>
                  <button className="button is-primary animated fadeInLeft"><a className="" ><Link  to="/signup">Sign Up</Link></a></button>
            </div>
        </section>
    </div>
</Router>
  )
}

export default Landing;