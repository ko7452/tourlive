import React, { useState } from "react";
import "./App.css";

import Nav from "./component/Nav";
import BoardList from "./component/BoardList";

const App = () => {
  const [boards, setbBoards] = useState([]);
  console.log("app에서 사용하네", boards);

  return (
    <div className="App">
      <Nav setbBoards={setbBoards} />
      <BoardList boards={boards} setbBoards={setbBoards} />
    </div>
  );
};

export default App;
