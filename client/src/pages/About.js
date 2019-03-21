
import React from "react";
import Header from "../components/header";
import kevPic from "../assets/kevpic.png"
import bingxiPic from "../assets/bingxi.jpeg"
import chrisPic from "../assets/chrispic.jpeg"

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
          <img style={{height: '300px', width: '300px'}}src={kevPic} alt="Kevin Conway"></img>
          <p>Kevin Conway</p>
          <p>Fullstack Web Developer</p>
          <br></br>
          <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '1em'}}>
            <a target="_blank" href="https://github.com/Kpconway519">Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/kevin-conway-6b1a1a170/">LinkedIn</a>
          </div>
        </div>
        <div className="card animated fadeInUp">
          <img style={{height: '300px', width: '300px'}} src={bingxiPic}></img>
          <p>Bingxi Du</p>
          <p>Fullstack Web Developer</p>
          <br></br>
          <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '1em'}}>
            <a target="_blank" href="https://github.com/Heicyberg">Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/bingxi-du-64350063/">LinkedIn</a>
          </div>
        </div>
        <div className="card animated fadeInUp">
          <img style={{height: '300px', width: '300px'}} src={chrisPic}></img>
          <p>Chris Wood</p>
          <p>Fullstack Web Developer</p>
          <br></br>
          <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '1em'}}>
            <a target="_blank" href="https://github.com/cwood89">Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/christopher-t-wood-2742aa170/">LinkedIn</a>
          </div>
        </div>


      </section>


      <div>

      </div>

    </span>
  )
}

export default About;
