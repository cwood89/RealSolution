
import React, { Component } from "react";
import ReactDOM from 'react-dom'
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
      origData: [],
      townNames: [],
      offMin: '',
      offMax: '',
      priceMin: '',
      priceMax: '',
      sqftMin: '',
      sqftMax: ''
    }
    this.getResults = this.getResults.bind(this)
    this.noDuplicateTowns = this.noDuplicateTowns.bind(this)
    this.minOfferFunc = this.minOfferFunc.bind(this)
    this.maxOfferFunc = this.maxOfferFunc.bind(this)
    this.minPriceFunc = this.minPriceFunc.bind(this)
    this.maxPriceFunc = this.maxPriceFunc.bind(this)
    this.minSqftFunc = this.minSqftFunc.bind(this)
    this.maxSqftFunc = this.maxSqftFunc.bind(this)
    this.filterResults = this.filterResults.bind(this)
  }
  // ==============================================
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async handleChange(input) {
    await this.setStateAsync({ load: true });
    this.props.actions.getItemsFromThirtParty(input);
    await this.setStateAsync({ load: false })
  }
  // ================================================================
  componentDidMount() {
    this.getResults()
    this.noDuplicateTowns()
  }

  async getResults() {
    await API.listOTL().then((data) => {
      this.setState({
        data: data.data,
        origData: data.data
      })
    })
  }

  displayModal(data) {

    console.log(data)

    let modal = (
      <div>
        {data}
      </div>
    )



    ReactDOM.render(
      modal
      , document.getElementById("modalTarget"));
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

  minOfferFunc(event) {
    //update the state with the new value
    this.setState({
      offMin: event.target.value
    })
  }

  maxOfferFunc(event) {
    this.setState({
      offMax: event.target.value
    })
  }

  minPriceFunc(event) {
    this.setState({
      priceMin: event.target.value
    })
  }

  maxPriceFunc(event) {
    this.setState({
      priceMax: event.target.value
    })
  }

  minSqftFunc(event) {
    this.setState({
      sqftMin: event.target.value
    })
  }

  maxSqftFunc(event) {
    this.setState({
      sqftMax: event.target.value
    })
  }



  filterResults(parameter) {
    if (parameter === "offer") {
      // alert(this.state.offMin)
      // alert(this.state.offMax)
      // console.log(this.state.origData)

      //take this.state.data and filter it according to the parameters set in state
      let newResult = this.state.data.filter((data) => data.otl >= this.state.offMin)
      let newerResult = newResult.filter((data) => data.otl <= this.state.offMax)

      this.setState({
        data: newerResult
      })
    } else if (parameter === "price") {
      let newPriceResult = this.state.data.filter((data) => data.Price >= this.state.priceMin)
      let newerPriceResult = newPriceResult.filter((data) => data.Price <= this.state.priceMax)
      this.setState({
        data: newerPriceResult
      })

    } else if (parameter === "sqft") {
      let newSqftResult = this.state.data.filter((data) => data.SQFT >= this.state.sqftMin)
      let newerSqftResult = newSqftResult.filter((data) => data.SQFT <= this.state.sqftMax)


      this.setState({
        data: newerSqftResult
      })
    } else {
      alert('error: filter function called unsuccessfully')
    }
  }


  saveSnack(){
     // Get the snackbar DIV
  var snackSave = document.getElementById("snackBar");

  // Add the "show" class to DIV
  snackSave.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ snackSave.className = snackSave.className.replace("show", ""); }, 3000);
  }




  render() {
    return (
      <div className="mainBackground">
        <Header />
        <PropertyHero />
        <div className="searchAndContent">
          <SearchMenu
            minOfferFunc={this.minOfferFunc}
            maxOfferFunc={this.maxOfferFunc}
            offMin={this.state.offMin}
            offMax={this.state.offMax}
            minPriceFunc={this.minPriceFunc}
            maxPriceFunc={this.maxPriceFunc}
            priceMin={this.state.priceMin}
            priceMax={this.state.priceMax}
            minSqftFunc={this.minSqftFunc}
            maxSqftFunc={this.maxSqftFunc}
            sqftMin={this.state.sqftMin}
            sqftMax={this.state.sqftMax}
            filterResults={this.filterResults} />
          {/* {this.noDuplicateTowns()} */}
          <Table>
            {this.state.data.map((data) => {
              return (
                <Row
                  key={data.subject}
                  data={data}
                  modal={this.displayModal}
                  saveSnack={this.saveSnack} />
              )
            }
            )}
          </Table>
          <div id="modalTarget"></div>
          <div id='snackBar'>Property Saved!</div>
          <img src="https://www.placehold.it/200x400" alt="fake ad"/>
        </div>
      </div>
    )
  }
}

export default OTLresults;
