import {Home} from "../Home/Home";
import '../../css/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact patch = {"/"} component={Home}/>
      </Switch>
    </Router>
  );
}

export {App};
