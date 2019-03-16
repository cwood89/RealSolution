import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
function PrivateRoute({ isAuthorized, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthorized) {
          return <Component {...props} />
        } else {
          return <Redirect to={{
            pathname: "/",
            state: { from: props.location }
          }} />
        }
      }}
    />
  );
}
export default PrivateRoute;