import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./signupPage";
import Login from "./loginPage";
import ReactDOM from "react-dom"



function Landing(props) {

    let buttons = (
      <div>
      <button className="button is-primary animated flipInX slower"><a className="" ><Link  to="/login">Log In</Link></a></button>
      <button className="button is-primary animated flipInX slower"><a className="" ><Link  to="/signup">Sign Up</Link></a></button>
    </div>
    )
  
   


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
        <Route path="/login" render={() => <Login authorize={props.authorize} />} />
        <Route path="/signup" render={() => <SignUp authorize={props.authorize} />} />
        </div>
        <section className="landingTextWriteup">
            <div className="container is-half landing0">
              <h1 className="animated fadeInLeft">Invest Wisely</h1>
              <p className="animated fadeInRight">Real Solution is a service which allows you to find investment properties quickly, manage them intelligently, and stay on track in a competitive market</p>
            </div>
            <div className="container is-half" id="buttonPlace">
              {/* { setTimeout(() => ReactDOM.render(buttons, document.getElementById('buttonPlace')), 5000)} */}
            </div>
        </section>
    </div>
</Router>
  )}

export default Landing;