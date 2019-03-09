import React from "react";
import Nav from "../nav";

function Header(props) {
  return (
    <section className="hero is-medium is-dark is-bold">
      <div className="hero-head">
        <Nav />
      </div>
    </section>
  )
}
export default Header;