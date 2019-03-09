
import React, { Component } from "react";
import Header from "../components/header";
import Table from "../components/ResultTable";
import Row from "../components/TableRow";
import API from "../utils/API"

class About extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.getResults = this.getResults.bind(this)
  }

  componentDidMount() {
    this.getResults()
  }

  getResults() {
    API.listOTL().then((data) => {
      this.setState({
        data: data.data
      })
    })
  }

  render() {
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
          <div className="card">
            <img src="http://placehold.it/300x300"></img>
            <p>Kevin Conway</p>
            <p>Fullstack Web Developer
            </p>
          </div>
          <div className="card">
            <img src="http://placehold.it/300x300"></img>
            <p>Bingxi Du</p>
            <p>Fullstack Web Developer
            </p>
          </div>
          <div className="card">
            <img src="http://placehold.it/300x300"></img>
            <p>Chris Wood</p>
            <p>Fullstack Web Developer
            </p>
          </div>
          

        </section>

      </span>
    )
  }
}

export default About;
