import React, { Component } from "react";
import Header from "../components/header";
import Table from "../components/ResultTable";
import Row from "../components/TableRow";
import API from "../utils/API";

class Landing extends Component {
  constructor() {
    super()
  }

  render() {

    return(
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

          <form action="/action_page.php">
            First name:<br></br>
            <input type="text" name="firstname" value="First Name"/>
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
            <input type="submit" value="Submit"/>
          </form> 
        </div>
        <div>
          {/* premium user signup */}
          premium signup: first name, last name, email, password, 
        </div>
      </section>
      </div>
  );
}
}

export default Landing