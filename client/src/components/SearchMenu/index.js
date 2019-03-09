
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
  <p className="menu-label">
    Administration
  </p>
  <ul className="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a className="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p className="menu-label">
    Transactions
  </p>
  <ul className="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside>


      </div>
    )
  }
}

export default SearchMenu;
