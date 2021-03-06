import React from "react";

function Table(props) {
  return (
    <table className="table is-narrow is-hoverable">
      <thead>
        <tr>
          <th><abbr title="Address">Address</abbr></th>
          <th><abbr title="Square Footage">Sq.ft.</abbr></th>
          <th><abbr title="Bedrooms">Bedrooms</abbr></th>
          <th><abbr title="Bathrooms">Bathrooms</abbr></th>
          <th><abbr title="Year Built">Year Built</abbr></th>
          <th><abbr title="List Price">List Price</abbr></th>
          <th><abbr title="Estimated Offer">Estimated Offer</abbr></th>
          <th><abbr title="Comps Indicator">Comparables</abbr></th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th><abbr title="Address">ADR</abbr></th>
          <th><abbr title="Square Footage">SQFT</abbr></th>
          <th><abbr title="Bedrooms">BR</abbr></th>
          <th><abbr title="Bathrooms">BA</abbr></th>
          <th><abbr title="Year Built">Built</abbr></th>
          <th><abbr title="List Price">LP</abbr></th>
          <th><abbr title="Estimated Offer">Est Offer</abbr></th>
          <th><abbr title="Comps Indicator">Comps</abbr></th>
        </tr>
      </tfoot>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

export default Table;