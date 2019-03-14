
import React from "react";
import Header from "../components/header";

function About() {
  return (
    <span>
      <Header />
      <section className="hero">
        {/* Main Heading */}
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              About Us
              </h1>
          </div>
        </div>
      </section>


      {/* Cards for Devs */}

      <section className="aboutCards">
        <div className="card animated fadeInUp ">
          <img src="http://placehold.it/300x300"></img>
          <p>Kevin Conway</p>
          <p>Fullstack Web Developer
            </p>
        </div>
        <div className="card animated fadeInUp">
          <img src="http://placehold.it/300x300"></img>
          <p>Bingxi Du</p>
          <p>Fullstack Web Developer
            </p>
        </div>
        <div className="card animated fadeInUp">
          <img src="http://placehold.it/300x300"></img>
          <p>Chris Wood</p>
          <p>Fullstack Web Developer
            </p>
        </div>


      </section>


      <div>

      </div>

    </span>
  )
}

export default About;
