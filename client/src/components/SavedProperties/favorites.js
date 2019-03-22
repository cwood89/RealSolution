import React from "react";

function Row(props) {

  // let ddStyle = {
  //   position: 'relative',
  //   bottom: '85px',
  //   zIndex: '1000'
  // }

  let favorites = props.favorites
  return (
    <tr className="thisRow">
      <td>{favorites.Address} <br></br> {favorites.City}, GA {favorites.Zip}</td>
      <td>{favorites.SQFT}</td>
      <td>{favorites.B}</td>
      <td>{favorites.B_F}/{favorites.B_H}</td>
      <td>{favorites.Y}</td>
      <td>${favorites.Price}</td>
      <td>{favorites.otl}%</td>
      <td className="dropdown-trigger">${favorites.comp_rental} / ${favorites.comp_sale}</td>
    </tr>

  )
}


export default Row;