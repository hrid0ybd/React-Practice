import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import MyList from "./components/list/Parent";
import Practice from "./components/practice/ParentComponent";
import Todo from "./components/todo/Parent";
import RandomNumber from "./components/random/RandomNumber";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/mylist" />
        </Route>
        <Route exact path="/mylist" component={MyList} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/random" component={RandomNumber} />
      </Switch>
    </Router>
  );
}

export default App;
