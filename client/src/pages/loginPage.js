import React from "react"
import API from "../utils/API"
import { withRouter } from "react-router-dom"
import Router from "react-router-dom"


function Login(props) {

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
              console.log(props.authorize)
              API.logIn(user, () => {
                props.authorize()
                props.history.push("/otl")
                // this.context.history.push('/otl')
              })

            }}>LogIn</button>
        </form>
      </div>
    </div >
  );
}

export default withRouter(Login);