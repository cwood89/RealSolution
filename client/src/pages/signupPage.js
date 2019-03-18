import React from "react"
import API from "../utils/API"
import createBrowserHistory from 'history/createBrowserHistory';
import { Link } from "react-router-dom";

const history = createBrowserHistory({ forceRefresh: true });



function SignUp() {
  return (

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
              <a className="navbar-item" ><Link to="/login">Log In</Link></a>
            </li>
            <li>
              <a className="navbar-item" ><Link to="/signup">Sign Up</Link></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="animated fadeInDown">
        <div className="loginMasterContainer">
          <div className="hero is-light heroLogin">Sign Up!</div>
          <form className="is-primary">
            <div className="signupFieldContainer is-half">
              <label>
                First Name:
              <input id="firstName" className="input is-success" type="text" name="firstName" />
              </label>
              <label>
                Last Name:
              <input id="lastName" className="input is-success" type="text" name="lastName" />
              </label>
              <label>
                Email:
                    <input id="email" className="input is-success" type="email" name="email" />
              </label>
              <label>
                Password:
                    <input id="password" className="input is-success" type="password" name="password" />
              </label>
            </div>
            <button className="button is-primary signupButton"
              onClick={(event) => {
                let user = {
                  firstName: document.getElementById("firstName").value,
                  lastName: document.getElementById("lastName").value,
                  email: document.getElementById("email").value,
                  password: document.getElementById("password").value
                }
                event.preventDefault();
                API.signUp(user, () => {
                  history.push("/otl")
                })

              }}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;