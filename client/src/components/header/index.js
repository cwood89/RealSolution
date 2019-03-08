import React from "react";
import Nav from "../nav";

function Header(props) {
  return (
    <section className="hero is-medium is-dark is-bold">
      <div className="hero-head">
        <Nav />
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            RealSolution
        </h1>
          <h2 className="subtitle">
            Invest wisely.
        </h2>
        </div>
      </div>
    </section>
  )
}
export default Header;