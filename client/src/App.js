import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OTLresults from "./pages/OTLresults";
import CompResults from "./pages/CompResults";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={OTLresults} />
          <Route exact path="/otl" component={OTLresults} />
          <Route exact path="/comps/:id" component={CompResults} />
          <Route exact path="/about" />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
