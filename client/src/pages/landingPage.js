import React from "react";
import {
  Link
} from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Real Solution</h1>
      <ul>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Landing;