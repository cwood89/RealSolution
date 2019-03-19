import React from "react";
import API from "../../utils/API"
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory({ forceRefresh: true });
function Nav() {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" >
      <div className="navbar-brand">
        <a className="navbar-item" href="/otl">
          <div className="mainBrand">Real Solution</div>
        </a>
      </div>
      {/* dropdown */}
      <div className="navbar-item dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button className="button has-background-dark has-text-light" aria-haspopup="true" aria-controls="dropdown-menu">
            <span><i className="fas fa-bars"></i></span>
          </button>
        </div>

        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <span className="dropdown-content">
            <a href="/otl" className="dropdown-item is-active animated zoomInRight">
              Properties
      </a>
            <a href="/profile" className="dropdown-item is-active animated zoomInRight">
              Profile
      </a>
            <a href="/about" className="dropdown-item is-active animated zoomInRight">
              About
      </a>
            <a href="/settings" className="dropdown-item is-active animated zoomInRight">
              Settings
        {/* When this button is clicked, it should go to the Profile page and the settings pane should open automatically */}
            </a>
            <a className="dropdown-item is-active animated zoomInRight" onClick={() => {
              API.logOut(() => {
                history.push("/")
              })
            }}>Log Out
            </a>
          </span>
        </div>


      </div>
      {/* end of dropdown */}
      <div id="navbarBooks" className="navbar-menu">
        <div className="navbar-end">
          <a href="/" className="navbar-item">
            <span className="icon">
              <i className="fab fa-github fa-2x"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;