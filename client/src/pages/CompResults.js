import React, { Component } from "react";
import Nav from "../components/nav"
import Table from "../components/ResultTable";
import CompRow from "../components/TableRow/compRow";
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
    console.log(this.props.match.params.id)
    this.getResults()
  }

  async getResults() {
    await API.findComps(6503611).then((data) => {
      console.log(data.data)
      this.setState({
        data: data.data
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
              <CompRow
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