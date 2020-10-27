import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BoardHome from "./component/BoardHome";
import Board from "./component/Board";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={BoardHome} />
          <Route path="/board" component={Board} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
