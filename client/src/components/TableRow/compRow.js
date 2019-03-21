import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import CompResults from "../../pages/CompResults";
import atlantaMap from "./atlanta.png"


function CompRow(props) {

  let ddStyle = {
    position: 'relative',
    bottom: '85px',
    zIndex: '1000'
  }

  const buttonStyle = {
    zIndex: '100'
  }

  const modalId = `modalDisplay${props.data.subject}`

  const compsLink = `/comps/${props.data.subject}`
  // let compRoute = `/api/comps/${  need data that goes here  }`

  // let url = "/comps/" + props.data.subject
  return (
      <tr className="thisRow">
        <td>{props.data.comp_address}</td>
        <td>{props.data.comp_size}</td>
        <td>{props.data.comp_B}</td>
        <td>{props.data.comp_year}</td>
        <td>${props.data.psf}</td>
        <td>{props.data.comp_fmls}</td>

      </tr>
  )
}

export default CompRow;

// // comp_B: 3
// comp_address: "4945 Cottonwood Trail"
// comp_fmls: 5982315
// comp_size: 2444
// comp_year: 2007
// psf: 98.61 price per square feet