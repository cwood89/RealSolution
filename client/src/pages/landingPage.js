import React from "react"
import axios from "axios"



class Landing extends React.Component {

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
    this.setState({firstName: event.target.value});
  }
  lNameHandler(event) {
    // Need to figure out how to address the correct field
    this.setState({lastName: event.target.value});
  }
  emailHandler(event) {
    // Need to figure out how to address the correct field
    this.setState({email: event.target.value});
  }
  passwordHandler(event) {
    // Need to figure out how to address the correct field
    this.setState({password: event.target.value});
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
  

      axios.post('/api/signup', user, (req, res) => {
        alert('signed up!')
        console.log(user)
      }).catch((err)=>{
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
    <div>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation"><h1 className="mainBrand">Real Solution</h1></nav>
      <div className="loginMasterContainer">
        <div className="hero is-light heroLogin">Login page</div>
        <form onSubmit={this.handleSubmit} className="is-primary">
          <div className="signupFieldContainer is-half">
                  <label>
                    First Name:
                    <input className="input is-success" type="text" value={this.state.firstName} onChange={this.fNameHandler} />
                  </label>
                  <label>
                    Last Name:
                    <input  className="input is-success" type="text" value={this.state.lastName} onChange={this.lNameHandler} />
                  </label>
                  <label>
                    Email:
                    <input  className="input is-success" type="email" value={this.state.email} onChange={this.emailHandler} />
                  </label>
                  {/* Need to build input validation logic */}
                  {/* state is currently the same for all */}
                  <label>
                    Password:
                    <input className="input is-success"  type="password" value={this.state.password} onChange={this.passwordHandler} />
                  </label>
          </div>
          <input className="button is-primary signupButton" type="submit" value="Submit" />
        </form>
      </div>
    </div>
    );
  }
}

export default Landing