
import React, { Component } from "react";
import Header from "../components/header";
import Table from "../components/ResultTable";
import Row from "../components/TableRow";
import API from "../utils/API"
import SearchMenu from "../components/SearchMenu"
import PropertyHero from "../components/PropertyHero"

class OTLresults extends Component {
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
      <div>
        <Header />
        <PropertyHero />
        <div className="searchAndContent">
        <SearchMenu />
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
      </div>
    )
  }
}

export default OTLresults;
