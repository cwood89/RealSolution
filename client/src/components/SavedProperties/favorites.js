import React from "react";

function Row(props) {

  // let ddStyle = {
  //   position: 'relative',
  //   bottom: '85px',
  //   zIndex: '1000'
  // }
  console.log(props.data)
  props.data.map((data) => {
    return (
      <tr className="thisRow">
        <td>{data.Address} {data.Sub} <br></br> {data.City}, {data.Zip}</td>
        <td>{data.SQFT}</td>
        <td>{data.B}</td>
        <td>{data.B_F}/{data.B_H}</td>
        <td>{data.Y}</td>
        <td>${data.Price}</td>
        <td>{data.otl}%</td>
        <td className="dropdown-trigger">${data.comp_rental} / ${data.comp_sale}</td>
      </tr>

    )
  })
}


export default Row;