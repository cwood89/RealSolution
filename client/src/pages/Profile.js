
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Header from "../components/header";
// import Table from "../components/ResultTable";
// import Row from "../components/TableRow";
// import API from "../utils/API"
import SavedProperties from "../components/SavedProperties"

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }


  savedRender() {
    const element = (
      <div>
        <table>
          <SavedProperties />
        </table>
      </div>
    );
    ReactDOM.render(element, document.getElementById('settingTarget'));
  }

  userRender() {
    const element = (
      <div>
        <h1>user settings</h1>
      </div>
    );
    ReactDOM.render(element, document.getElementById('settingTarget'));
  }

  propRender() {
    const element = (
      <div>
        <h1>properties settings</h1>
        <p>Save a  Zip code:</p>
        <input type='text'></input>
        <input type='submit'></input>
      </div>
    );
    ReactDOM.render(element, document.getElementById('settingTarget'));
  }
  kevFunc(tab) {
    if(tab === 'saved') {
      this.savedRender()
    } else if(tab === 'user') {
      this.userRender()
    } else {
      this.propRender()
    }

  }

  render() {
    return (
      <div>
        <Header />
        <div className="tabs is-fullwidth">
          <ul>
            {/* Gonna make these simple routes for now which render the correct info.  */}
            <li><a onClick={ () => this.kevFunc('saved') } >Saved Properties</a></li>
            <li><a onClick={ () => this.kevFunc('user') } >User Settings</a></li>
            <li><a onClick={ () => this.kevFunc('properties') } >Property Settings</a></li>
          </ul>
        </div>
        <div id="settingTarget"></div>
      </div>
    )
  }
}

export default Profile;
