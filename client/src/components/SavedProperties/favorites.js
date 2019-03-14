import React from "react";

function Row(props) {

  let ddStyle = {
    position: 'relative',
    bottom: '85px',
    zIndex: '1000'
    }

//   let url = "/comps/" + props.data.subject

  return (
    <tr className="thisRow">
      {/* <td>{props.data.Address} {props.data.Sub} <br></br> {props.data.City}, {props.data.Zip}</td>
      <td>{props.data.SQFT}</td>
      <td>{props.data.B}</td>
      <td>{props.data.B_F}/{props.data.B_H}</td>
      <td>{props.data.Y}</td>
      <td>${props.data.Price}</td>
      <td>{props.data.otl}%</td>
      <td className="dropdown-trigger">${props.data.comp_rental} / ${props.data.comp_sale}</td>  */}
     <td>property name</td>
     <td>property address</td>
     <td>so on and so forth</td>
      
     </tr>

  )
}

export default Row;