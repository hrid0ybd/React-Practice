import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import ArrayHandling from "./components/array/ArrayHandling";
import Quiz from "./components/quiz/QuizApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quiz" />
        </Route>
        <Route exact path="/array" component={ArrayHandling} />
        <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
