
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
    <li><a>Comps</a></li>
    <li><a>Thing 2</a></li>
  </ul>
</aside>


      </div>
    )
  }
}

export default SearchMenu;
