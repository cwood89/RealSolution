import React, { Component } from "react";
import Nav from "../components/nav"
import Table from "../components/ResultTable";
import Row from "../components/TableRow";
import API from "../utils/API"

class CompResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.getResults = this.getResults.bind(this)
  }

  componentDidMount() {
    this.getResults()
  }

  getResults() {
    API.findComps(this.props.match.params.id).then((data) => {
      console.log(data)
      this.setState({
        data: data
      })
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Comps</h1>
            </div>
          </div>
        </section>


        <Table>
          {this.state.data.map((data) => {
            return (
              <Row
                key={data.subject}
                data={data} />
            )
          }
          )}
        </Table>
      </div>
    )
  }

}
export default CompResults;