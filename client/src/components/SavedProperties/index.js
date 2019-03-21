import React, { Component } from "react";
import Favorites from "./favorites.js"
import API from "../../utils/API.js";
class SavedProperties extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    this.getSaved();
  }
  async getSaved() {
    await API.listFavorites(this.props.id).then((data) => {
      console.log(data)
      this.setState({ data: data })
    })
  }
  render() {
    console.log("property render=======================")
    console.log(this.state.data)
    console.log("+==================================")
    return (
      this.state.data.length < 1
        ? (<h1>You don't have any saved listings!</h1>)
        : (
          <table className="table is-narrow is-hoverable">
            <thead>
              <tr>
                <th><abbr title="Address">Address</abbr></th>
                <th><abbr title="Square Footage">Sq.ft.</abbr></th>
                <th><abbr title="Bedrooms">Bedrooms</abbr></th>
                <th><abbr title="Bathrooms">Bathrooms</abbr></th>
                <th><abbr title="Year Built">Year Built</abbr></th>
                <th><abbr title="List Price">List Price</abbr></th>
                <th><abbr title="Estimated Offer">Estimated Offer</abbr></th>
                <th><abbr title="Comps Indicator">Comparables</abbr></th>
              </tr>
            </thead>
            <Favorites data={this.state.data} />
            < tfoot >
              <tr>
                <th><abbr title="Address">ADR</abbr></th>
                <th><abbr title="Square Footage">SQFT</abbr></th>
                <th><abbr title="Bedrooms">BR</abbr></th>
                <th><abbr title="Bathrooms">BA</abbr></th>
                <th><abbr title="Year Built">Built</abbr></th>
                <th><abbr title="List Price">LP</abbr></th>
                <th><abbr title="Estimated Offer">Est Offer</abbr></th>
                <th><abbr title="Comps Indicator">Comps</abbr></th>
              </tr>
            </tfoot>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        )
    )
  }
}

export default SavedProperties;