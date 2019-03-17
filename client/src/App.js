import React, { Component } from "react";
<<<<<<< HEAD
import RouteControl from "./Routing"

class App extends Component {


  render() {

    return (
      <RouteControl />
      )
    }
=======
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
>>>>>>> 95d33b98259cd85e8f907a3bd82da2c369a5d1b9
}
export default App;