import React from "react";

function compTable(props) {
  return (
    <table className="table is-narrow is-hoverable">
      <thead>
        <tr>
          <th><abbr title="Address">Address</abbr></th>
          <th><abbr title="Square Footage">Sq.ft.</abbr></th>
          <th><abbr title="Bedrooms">Bedrooms</abbr></th>
          <th><abbr title="Year Built">Year Built</abbr></th>
          <th><abbr title="List Price">Cost Per Sq Ft</abbr></th>
          <th><abbr title="List Price">FMLS</abbr></th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

export default compTable;