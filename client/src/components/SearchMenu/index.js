
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
      <div class="slidecontainer">
      <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
      </div>
    <li><a>Price</a></li>
      <div class="slidecontainer">
      <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
      </div>
    <li><a>Square Footage</a></li>
      <div  class="slidecontainer">
      <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
      </div>
    <li><a>Town</a></li>
    <div className="townScroller">
      <p>Town 1</p>
      <p>Town 1</p>
      <p>Town 1</p>
      <p>Town 1</p>
      <p>Town 1</p>
      <p>Town 1</p>
      <p>Town 1</p>
      <p>Town 1</p>
      <p>Town 1</p>
   
    </div>
    <li><a>Neighborhood</a></li>
    <div className="hoodScroller">
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
      <p>Neighborhood 1</p>   
    </div>
  </ul>
</aside>

      </div>
    )
  }
}

export default SearchMenu;
