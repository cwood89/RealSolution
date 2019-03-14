import React, { Component } from "react"
import API from "../utils/API"



class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fNameHandler = this.fNameHandler.bind(this);
    this.lNameHandler = this.lNameHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
  }

  fNameHandler(event) {
    // Need to figure out how to address the correct field
    this.setState({ firstName: event.target.value });
  }
  lNameHandler(event) {
    // Need to figure out how to address the correct field
    this.setState({ lastName: event.target.value });
  }
  emailHandler(event) {
    // Need to figure out how to address the correct field
    this.setState({ email: event.target.value });
  }
  passwordHandler(event) {
    // Need to figure out how to address the correct field
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    // alert('A name was submitted: ' + user.firstName + user.lastName + user.email + user.password);

    API.signUp(user).then((req, res) => {
      alert('signed up!')
      console.log(user)
    }).catch((err) => {
      console.log(err)
    })
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.firstName} onChange={this.fNameHandler} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.lastName} onChange={this.lNameHandler} />
        </label>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.emailHandler} />
        </label>
        {/* Need to build input validation logic */}
        {/* state is currently the same for all */}
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.passwordHandler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUp;