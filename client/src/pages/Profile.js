
import React, { Component } from "react";
import Header from "../components/header";
import Table from "../components/ResultTable";
import Row from "../components/TableRow";
import API from "../utils/API"

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.getResults = this.getResults.bind(this)
  }

  componentDidMount() {
    this.getResults()
  }

  getResults() {
    API.listOTL().then((data) => {
      this.setState({
        data: data.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header />

        <div className="tabs">
          <ul>
            <li className="is-active"><a>Saved Properties</a></li>
            <li><a>User Settings</a></li>
            <li><a>Prop Settings</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Profile;
