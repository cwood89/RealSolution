import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory({ forceRefresh: true });
function Nav() {
  return (
    <div>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
          <a className="navbar-item">
            <div className="mainBrand"><a href="/" className="mainBrand">Real Solution</a></div>
          </a>
        </div>

        <div className="navbar-end">
          {localStorage.getItem("auth")
            ? (
              <ul>
                <li>
                  <a className="navbar-item" ><Link to="/profile">Profile</Link></a>
                </li>
                <li>
                  <a className="navbar-item" onClick={() => {
                    API.logOut(() => {
                      history.push("/")
                    })
                  }} >Log Out</a>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <a className="navbar-item" ><Link className="landingButton" to="/login">Log In</Link></a>
                </li>
                <li>
                  <a className="navbar-item" ><Link className="landingButton" to="/signup">Sign Up</Link></a>
                </li>
              </ul>

            )}

        </div>
      </nav>
    </div>
  )
}
export default Nav;