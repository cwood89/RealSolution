import React from "react";

function Row(props) {

  let ddStyle = {
    position: 'relative',
    bottom: '85px',
    zIndex: '1000'
    }

  const buttonStyle = {
    zIndex: '100'
  }

  // let compRoute = `/api/comps/${  need data that goes here  }`

  let url = "/comps/" + props.data.subject
  return (
    <tr className="thisRow">
      <td>{props.data.Address} {props.data.Sub} <br></br> {props.data.City}, {props.data.Zip}</td>
      <td>{props.data.SQFT}</td>
      <td>{props.data.B}</td>
      <td>{props.data.B_F}/{props.data.B_H}</td>
      <td>{props.data.Y}</td>
      <td>${props.data.Price}</td>
      <td>{props.data.otl}%</td>
      <td className="dropdown-trigger">${props.data.comp_rental} / ${props.data.comp_sale}</td> 
      <td className="showButtons animated fadeInRightBig faster">
      {/* These lines below are for spacing */}
      {" "}
      <br></br>
      {" "}
        <div className="dropdown is-active is-hoverable">
          <div className="dropdown-menu ddButtons"  id="dropdown-menu4" role="menu">
            <div className="dropdown-content" style={ddStyle}>
              <div className="dropdown-item">
                <button className="button is-primary" style={buttonStyle}>Comps</button>
              </div>
              <div className="dropdown-item">
                <button className="button is-info" >Info</button>
              </div>
              <div className="dropdown-item">
                <button className="button is-danger" >Save</button>
              </div>
         
            </div>
          </div>
        </div>
      </td>     
      </tr>

  )
}

export default Row;