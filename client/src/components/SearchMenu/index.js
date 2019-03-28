
import React, { Component } from "react";
// import TownScroller from "../TownScroller/index.js"


function SearchMenu(props) {

  // Need to make a thing which takes all the returned towns and displays them in the townScroller list.
  return (
    <div className="searchMenu">
      <aside className="menu" style={{ width: '100%'}}>

        <ul className="menu-list" >
          <li>Estimated Offer</li>
          <div className="menuInputs">
            <input className="input" type="text" name="estOfferMin" placeholder="Min" value={props.offMin} onChange={props.minOfferFunc} />
            <input className="input" type="text" name="estOfferMax" placeholder="Max" value={props.offMax} onChange={props.maxOfferFunc} />
            {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          </div>
          <div>
            <input type="submit" className="button is-small is-rounded is-warning" value="Filter" onClick={() => props.filterResults('offer')}/>
          </div>
          <li>Price</li>
          <div className="menuInputs">
            <input className="input" type="text" name="estOfferMin" placeholder="Min" value={props.priceMin} onChange={props.minPriceFunc} />
            <input className="input" type="text" name="estOfferMax" placeholder="Max" value={props.priceMax} onChange={props.maxPriceFunc} />
          </div>
            <div style={{alignItems: 'center'}}>
              <input type="submit" className="button is-small is-rounded is-warning" value="Filter" onClick={() => props.filterResults('price')}/>
            </div>
          <li>Square Footage</li>
          <div className="menuInputs">
            <input className="input" type="text" name="estOfferMin" placeholder="Min" value={props.sqftMin} onChange={props.minSqftFunc} />
            <input className="input" type="text" name="estOfferMax" placeholder="Max" value={props.sqftMax} onChange={props.maxSqftFunc} />
          </div>
          <div>
            <input type="submit" className="button is-small is-rounded is-warning" value="Filter" onClick={() => props.filterResults('sqft')}/>
          </div>
        </ul>
      </aside>

    </div>
  )

}

export default SearchMenu;
