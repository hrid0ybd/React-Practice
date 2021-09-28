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
import StripeCheck from "./components/stripe/Stripe";
import TodoS from "./components/todo/Todo";
import Form from "./components/form/Form";

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
        <Route exact path="/todos" component={TodoS} />
        <Route exact path="/random" component={RandomNumber} />
        <Route exact path="/stripe" component={StripeCheck} />
        <Route exact path="/form" component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
