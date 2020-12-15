import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(): ReactElement {
  return (
    <React.Fragment>
      <Router>
        <Switch>{/* <Route path="/" component={} /> */}</Switch>
      </Router>
    </React.Fragment>
  );
}
