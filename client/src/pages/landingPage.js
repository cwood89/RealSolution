import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav/newNav"
function Landing() {
  return (
    <div>
      <Nav />
      <section className="landingTextWriteup">
        <div className="container is-half landing0">
          <h1 className="animated fadeInLeft">Invest Wisely</h1>
          <p className="animated fadeInRight">Real Solution is a service which allows you to find investment properties quickly, manage them intelligently, and stay on track in a competitive market.</p>
        </div>
        {/* {() => {setTimeout(document.getElementById('buttonPlace').style.display = {display: 'block'}, 2000)}} */}
        <div className="container is-half" id="buttonPlace">
          <button className="button is-primary animated fadeInLeft"><a className="" ><Link to="/login">Log In</Link></a></button>
          <button className="button is-primary animated fadeInLeft"><a className="" ><Link to="/signup">Sign Up</Link></a></button>
        </div>
      </section>
    </div >
  )
}

export default Landing;