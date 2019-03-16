import React from "react";

function LogIn(props) {
  return (
    <div className="animated fadeInDown" >
      <div className="hero is-light heroLogin">Login</div>
      <form className="is-primary" action="/api/login" method="POST">
        <div className="container signupFieldContainer is-half">
          <label for="email"><b>Email</b></label>
          <input className="input is-success" type="email" placeholder="Enter Email" name="email" required />
          <label for="password"><b>Password</b></label>
          <input className="input is-success" type="password" placeholder="Enter Password" name="password" required />
          <button type="submit">Login</button>
          {/* <input type="checkbox" checked="checked" name="remember"> Remember </input> */}
        </div>
      </form>
    </div>

  )
}
export default LogIn;

// class Login extends Component {
//   state = { redirectToReferrer: false };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true });
//     });
//   };

//   render() {
//     let { from } = this.props.location.state || { from: { pathname: "/" } };
//     let { redirectToReferrer } = this.state;

//     if (redirectToReferrer) return <Redirect to={from} />;

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }