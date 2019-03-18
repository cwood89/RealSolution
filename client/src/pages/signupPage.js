import React from "react"
import API from "../utils/API"
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({ forceRefresh: true });



function SignUp() {
  return (

    <div>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation"><h1 className="mainBrand">Real Solution</h1></nav>
      <div className="loginMasterContainer">
        <div className="hero is-light heroLogin">Login page</div>
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
                firstName: document.getElementById("firstName").value,
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
  );
}

export default SignUp;