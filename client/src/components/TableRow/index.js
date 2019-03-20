import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import CompResults from "../../pages/CompResults";
import atlantaMap from "./atlanta.png"


function Row(props) {

  let ddStyle = {
    position: 'relative',
    bottom: '85px',
    zIndex: '1000'
  }

  const buttonStyle = {
    zIndex: '100'
  }

  const modalId = `modalDisplay${props.data.subject}`

  const compsLink = `/comps/${props.data.subject}/${props.data.Address}/${props.data.City}/${props.data.Zip}/${props.data.Sub}/`
  // let compRoute = `/api/comps/${  need data that goes here  }`

  // let url = "/comps/" + props.data.subject
  return (
      <tr className="thisRow">
        <td>{props.data.Address} <br></br> {props.data.City}, {props.data.Zip}</td>
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
            <div className="dropdown-menu ddButtons" id="dropdown-menu4" role="menu">
              <div className="dropdown-content" style={ddStyle}>
                <div className="dropdown-item">
                  <button className="button is-primary" style={buttonStyle}><a><Link to={compsLink}>Comps</Link></a></button>
                </div>
                <div className="dropdown-item">
                  <button className="button is-info" onClick={() => {
                    document.getElementById(modalId).className = 'modal is-active'
                  }}>Info</button>
                </div>
                <div className="dropdown-item">
                  <button className="button is-danger" >Save</button>
                </div>

              </div>
            </div>
          </div>
          <div id={modalId} className="modal">
            <div className="modal-background" onClick={() => document.getElementById(modalId).className = 'modal'}></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title"><strong>{props.data.Address} <br></br> {props.data.City}, GA, {props.data.Zip}</strong></p>
                <button className="delete" aria-label="close" onClick={() => document.getElementById(modalId).className = 'modal'}></button>
              </header>
              <section className="modal-card-body">
                <ul>
                  <li>Subdivision: {props.data.Sub}</li>
                  <li>Square Feet: {props.data.SQFT}</li>
                  <li>Bedrooms: {props.data.B}</li>
                  <li>Full/Half Baths: {props.data.B_F}/{props.data.B_H}</li>
                  <li>Year Built: {props.data.Y}</li>
                  <li>Price: ${props.data.Price}</li>
                  <li>OTL: {props.data.otl}%</li>
                  <li>Rental/Sale: ${props.data.comp_rental} / ${props.data.comp_sale}</li>
                  <img src={atlantaMap} alt={'atlanta map'}></img>
                </ul>
              </section>
              <footer className="modal-card-foot">
                <button className="button is-primary" style={buttonStyle}><Link to={compsLink}>Comps</Link></button>
                <button className="button is-danger" style={buttonStyle}>Save</button>
              </footer>
            </div>
          </div>
        </td>
        <td>
        </td>
      </tr>
  )
}

export default Row;