import React from "react";

function Row(props) {
  let url = "/comps/" + props.data.subject
  return (
    <tr>
      <td>{props.data.subject}</td>
      <td>{props.data.Address}</td>
      <td>{props.data.Sub}</td>
      <td>{props.data.City}</td>
      <td>{props.data.Zip}</td>
      <td>{props.data.SQFT}</td>
      <td>{props.data.B}</td>
      <td>{props.data.B_F}/{props.data.B_H}</td>
      <td>{props.data.Y}</td>
      <td>${props.data.Price}</td>
      <td>{props.data.otl}%</td>
      <td>${props.data.est_rent}</td>
      <td>${props.data.est_sale}</td>
      <td>${props.data.comp_rental} / ${props.data.comp_sale}</td>
      <td>
        <a className="button is-small is-rounded is-danger"
        href={url}>
        <i class="fas fa-heart"></i>
        Save
        </a>

        <a className="button is-small is-rounded is-dark"
        href={url}>
        <i class="fas fa-info-circle"></i>
        More Info
        </a>

        <a className="button is-small is-rounded is-primary"
        data-id={props.data.subject}
        href={url}>
        Find Comps</a>
      </td>
    </tr>
  )
}

export default Row;