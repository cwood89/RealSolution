import React from "react"
import API from "../utils/API"
import createBrowserHistory from 'history/createBrowserHistory';
import { Link } from "react-router-dom";

const history = createBrowserHistory({ forceRefresh: true });

function Login() {
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

      <div className="loginMasterContainer animated fadeInDown">
        <div className="hero is-light heroLogin">Login page</div>
        <form className="is-primary">
          <div className="signupFieldContainer is-half">
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
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
              }
              event.preventDefault();
              API.logIn(user, () => {
                history.push("/otl")
              })

            }}>Log In</button>
        </form>
      </div>
    </div >
  );
}

export default Login;