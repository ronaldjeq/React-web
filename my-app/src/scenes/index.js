import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import "./index.css";

/**
 * TODO
 * - Test when token expiration
 */

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}


export default App;
