
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Header from "../components/header";
// import Table from "../components/ResultTable";
// import Row from "../components/TableRow";
// import API from "../utils/API"
import SavedProperties from "../components/SavedProperties"
import API from "../utils/API";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.getUser()
  }
  async getUser() {
    await this.setState({
      user: localStorage.getItem("auth")
    })
    this.tabFunc('saved')
  }

  savedRender() {

    const element = (
      <div>
        <SavedProperties id={this.state.user} />
      </div>
    );
    ReactDOM.render(element, document.getElementById('settingTarget'));
  }

  userRender() {
    const element = (
      <Router>
        <div className="has-text-centered">
          <h1>Customize your experience with RealSolution premium!</h1>
          <br></br>
          <h2>RealSolution Premium lets you:</h2>
          <br></br>
          <ul>
            <li className="animated fadeInLeft"><p><i class="fas fa-2x fa-file-import"></i>    Import your own data and use RealSolution's tools for maximizing investment opportunities</p></li>
            <br></br>
            <li className="animated fadeInRight"><p><i class="fas  fa-2x fa-users-cog"></i>    Customize your user experience with notifications, Geofencing functions, and more.</p></li>
            <br></br>
            <li className="animated fadeInLeft"><p><i class="fas  fa-2x fa-plus-circle"></i>    Get access to new features first</p></li>
            <br></br>
            <li className="animated fadeInRight"><p><i class="far  fa-2x fa-thumbs-up"></i>    Realsolution premium is ad-free</p></li>
          </ul>
          <br></br>
          <button className="button is-primary is-large animated pulse infinite"><a target="_blank" href="https://docs.google.com/spreadsheets/d/1viRr2fACZjM15TgyWl7brzmh-4rCh8Csvc6NdkaOAIs/edit#gid=0">Upgrade to Premium</a></button>
        </div>
      </Router>
    );
    ReactDOM.render(element, document.getElementById('settingTarget'));
  }

  propRender() {
    const element = (
      <div className="has-text-centered">
        <h1>properties settings</h1>
        <p>Save a  Zip code:</p>
        <input type='text'></input>
        <input type='submit'></input>
      </div>
    );
    ReactDOM.render(element, document.getElementById('settingTarget'));
  }
  tabFunc(tab) {
    if (tab === 'saved') {
      this.savedRender()
    } else if (tab === 'user') {
      this.userRender()
    } else {
      this.propRender()
    }

  }

  render() {
    return (
      <div className="mainBackground">
        <Header />
        <div className="tabs is-fullwidth">
          <ul>
            {/* Gonna make these simple routes for now which render the correct info.  */}
            <li><a onClick={() => this.tabFunc('saved')} >Saved Properties</a></li>
            <li><a onClick={() => this.tabFunc('user')} >User Settings</a></li>
            <li><a onClick={() => this.tabFunc('properties')} >Property Settings</a></li>
          </ul>
        </div>
        <div id="settingTarget">stuff here</div>
      </div>
    )
  }
}

export default Profile;
