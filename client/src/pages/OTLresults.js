
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
      data: [],
      townNames: []
    }
    this.getResults = this.getResults.bind(this)
    this.noDuplicateTowns = this.noDuplicateTowns.bind(this)
  }

  async componentDidMount() {
    await this.getResults()
      this.noDuplicateTowns()
  }

  getResults() {
    API.listOTL().then((data) => {
      this.setState({
        data: data.data
      })
    })
  }

  async noDuplicateTowns() {
      // let allTownNames = []
      // let noDuplicateTownNames = []

    // function getTowns(array) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       array.forEach((data) => {
    //        //take the data from the database and put it into a local array.
    //        allTownNames.push(data.City)
    //        alert(allTownNames)
    //         resolve()
    //       if (allTownNames.length !== 0) {
    //         resolve()
    //       } else {
    //         reject('error: something went wrong')
    //       }
    //      })
    //    }, 2000)
    //   })}
      
    //   getTowns(this.state.data)

    //    getTowns(this.state.data).then(() => {
      //   noDuplicateTownNames = [...new Set(allTownNames)]
      // }
      // ).then(() => {
      //   noDuplicateTownNames = noDuplicateTownNames.sort()
      // }
      // ).then(() => alert(noDuplicateTownNames))
    }






    render() {
      return (
        <div>
        <Header />
        <PropertyHero />
        <div className="searchAndContent">
        <SearchMenu />
        {/* {this.noDuplicateTowns()} */}
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
