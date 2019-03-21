import React, { Component } from "react";
import Nav from "../components/nav"
import CompTable from "../components/ResultTable/compTable";
import CompRow from "../components/TableRow/compRow";
import API from "../utils/API"

class CompResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sale: [],
      rent: [],
    }
    this.getResults = this.getResults.bind(this)
  }

  async componentDidMount() {
    console.log(this.props.match.params.id)
    await this.getResults()
  }

  async getResults() {
    await API.findComps(this.props.match.params.id).then((data) => {
      console.log(data)
      console.log(data.data.rent)
      this.setState({
        sale: data.data.sale,
        rent: data.data.rent
      })
    })

    await API.getResults()
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="hero">
          <div className="hero-body">
            <div className="container">
            <p>Comps for</p>
              <h1 className="title">{this.props.match.params.address}, {this.props.match.params.city}, GA, {this.props.match.params.zip}</h1>
              <p>Subdivision: {this.props.match.params.subdivision}</p>
            </div>
          </div>
        </section>


        <div className="compsHolder" style={{display: 'flex'}}>
            <div className="container is-half">
              <h1 className="title">Sale</h1>
     
         <CompTable>
           {this.state.sale.map((data) => {
             return (
               <CompRow
                 key={data.subject}
                 data={data} />
             )
           }
           )}
           </CompTable>

           </div>
           <div className="container is-half">
              <h1 className="title">Rental</h1>

         <CompTable>
           {this.state.rent.map((data) => {
             return (
               <CompRow
                 key={data.subject}
                 data={data} />
             )
           }
           )}
         </CompTable>

         </div>
         </div>
      </div>
    )
  }


}
export default CompResults;