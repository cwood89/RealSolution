
import React, { Component } from "react";
class SearchMenu extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>



<aside className="menu">
  <p className="menu-label">
    Filter Properties
  </p>
  <ul className="menu-list">
    <li><a>Estimated Offer</a></li>
    <li><a>Price</a></li>
    <li><a>Square Footage</a></li>
    <li><a>Town</a></li>
    <li><a>Neighborhood</a></li>
  </ul>
</aside>


      </div>
    )
  }
}

export default SearchMenu;
