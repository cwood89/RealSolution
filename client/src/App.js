import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OTLresults from "./pages/OTLresults";
import CompResults from "./pages/CompResults";
import About from "./pages/About";
import Profile from "./pages/Profile"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={OTLresults} />
          <Route exact path="/otl" component={OTLresults} />
          <Route exact path="/comps/:id" component={CompResults} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
