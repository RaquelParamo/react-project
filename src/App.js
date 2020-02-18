import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import User from "./containers/User";
// import UserProfile from "./containers/UserProfile";

import "./App.scss";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
