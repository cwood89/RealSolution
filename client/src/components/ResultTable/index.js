import React from "react";

function Table(props) {
  return (
    <table className="table is-narrow is-hoverable">
      <thead>
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
      </thead>
      <tfoot>
        <tr>
          <th>FMLS</th>
          <th><abbr title="Address">ADR</abbr></th>
          <th>Sub</th>
          <th>City</th>
          <th>Zip</th>
          <th><abbr title="Square Footage">SQFT</abbr></th>
          <th><abbr title="Bedrooms">BR</abbr></th>
          <th><abbr title="Bathrooms">BA</abbr></th>
          <th><abbr title="Year Built">Built</abbr></th>
          <th><abbr title="List Price">LP</abbr></th>
          <th><abbr title="Estimated Offer">E Offer</abbr></th>
          <th><abbr title="Estimated Sale">E Sale</abbr></th>
          <th><abbr title="Estimated Rental">Est Rent</abbr></th>
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