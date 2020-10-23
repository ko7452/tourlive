import React from "react";
import "./App.css";

import Search from "./component/Search";
import BoardList from "./component/BoardList";

const App = () => {
  return (
    <div className="App">
      <Search />
      <BoardList />
    </div>
  );
};

export default App;
