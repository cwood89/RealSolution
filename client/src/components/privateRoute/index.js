import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
function PrivateRoute({ isAuthenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? ( //=======================
          // need to link ths to session validation
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: "/",
              state: { from: props.location }
            }} />
          )}
    />
  );
}
export default PrivateRoute;