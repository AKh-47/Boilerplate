import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthProvider from "./context/AuthContext";

export default function App(): ReactElement {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <AuthProvider></AuthProvider>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
