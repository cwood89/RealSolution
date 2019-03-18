import React, { Component } from "react";
import RouteControl from "./Routing";
import API from "./utils/API"
class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthorized: false
    }
    this.checkAuth = this.checkAuth.bind(this)
  }

  componentWillMount() {
    this.checkAuth();
  }

  checkAuth() {
    if (API.verify()) {
      this.setState({
        isAuthorized: true
      })
    }
  }

  render() {
    return (
      <RouteControl isAuthorized={this.state.isAuthorized} />
    )
  }
}
export default App;