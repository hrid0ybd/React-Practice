import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import ArrayHandling from "./components/array/ArrayHandling";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/array" />
        </Route>
        <Route exact path="/array" component={ArrayHandling} />
      </Switch>
    </Router>
  );
}

export default App;
