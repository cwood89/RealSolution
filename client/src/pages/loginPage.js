import React from "react"
import API from "../utils/API"
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({ forceRefresh: true });

function Login() {
  return (

    <div>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation"><h1 className="mainBrand">Real Solution</h1></nav>
      <div className="loginMasterContainer">
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