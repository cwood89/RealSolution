import React from "react";

function Row(props) {

  let ddStyle = {
    position: 'relative',
    bottom: '85px',
    zIndex: '1000'
  }
  console.log(props.data)
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
    </tr>

  )
}

export default Row;