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

<<<<<<< HEAD
    return (
      <div>

        <div>
          {/* This will be a hero later */}
          landing page
      </div>

        <section>
          {/* Flippable div */}
          <div>
            {/* regular user signup */}
            regular signup: first name, last name, email, password
  
          <form action="/api/signup" method="POST">
              First name:<br></br>
              <input type="text" name="firstname" value="First Name" />
              <br></br>
              Last name:<br></br>
              <input type="text" name="lastname" value="Last Name" />
              <br></br>
              Email:<br></br>
              <input type="text" name="email" value="" />
              <br></br>
              Password:<br></br>
              <input type="text" name="password" value="" />
              <br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div>
            {/* premium user signup */}
            premium signup: first name, last name, email, password,
        </div>
        </section>
      </div>
=======
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
>>>>>>> a16f4eae16660705ecf11dfa49157cecc5cb4178
    );
  }
}

export default Landing