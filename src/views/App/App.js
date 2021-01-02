import {Home} from "../Home/Home";
import {Projects} from "../Projects/Projects";
import Pendu from "../Pendu/Pendu";
import Memory from "../Memory/Memory";
import {Cassebrique} from "../CasseBrique/Cassebrique";
import {About} from "../About/About";

import '../../css/App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = {"/"} component={Home}/>
        <Route path={"/projects"} component={Projects}/>
        <Route path={"/pendu"} component={Pendu}/>
        <Route path={"/projects/memory"} component={Memory}/>
        <Route path={"/projects/cassebrique"} component={Cassebrique}/>
        <Route path={"/about"} component={About}/>
      </Switch>
    </Router>
  );
}

export {App};
