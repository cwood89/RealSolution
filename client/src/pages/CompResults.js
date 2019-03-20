import React, { Component } from "react";
import Nav from "../components/nav"
import Table from "../components/ResultTable";
import CompRow from "../components/TableRow/compRow";
import API from "../utils/API"

class CompResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sale: [],
      rent: []
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
      console.log(data.data[0].sale)
      this.setState({
        sale: data.data[0].sale,
        rent: data.data[1].rent
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
           <h1>Sale</h1>
           {this.state.sale.map((data) => {
             return (
               <CompRow
                 key={data.subject}
                 data={data} />
             )
           }
           )}
         </Table>
         <Table>
           <h1>Rent</h1>
           {this.state.rent.map((data) => {
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