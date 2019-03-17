
import React, { Component } from "react";
// import TownScroller from "../TownScroller/index.js"


function SearchMenu(props) {

  // Need to make a thing which takes all the returned towns and displays them in the townScroller list.
  return (
    <div>
      <aside className="menu">

        <ul className="menu-list">
          <li>Estimated Offer</li>
          <div className="menuInputs">
            <input className="input" type="text" name="estOfferMin" value="Min: 0" />
            <input className="input" type="text" name="estOfferMax" value="Max: 100" />
          </div>
          <li>Price</li>
          <div className="menuInputs">
            <input className="input" type="text" name="estOfferMin" value="Min: 0" />
            <input className="input" type="text" name="estOfferMax" value="Max: 100" />
          </div>
          <li>Square Footage</li>
          <div className="menuInputs">
            <input className="input" type="text" name="estOfferMin" value="Min: 0" />
            <input className="input" type="text" name="estOfferMax" value="Max: 100" />
          </div>
        </ul>
      </aside>

    </div>
  )

}

export default SearchMenu;
