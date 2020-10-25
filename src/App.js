import React, { useState } from "react";
import "./App.css";

import Nav from "./component/Nav";
import BoardList from "./component/BoardList";

const App = () => {
  const [boards, setbBoards] = useState([]);
  // console.log("app에서 사용하네", boards);

  return (
    <div className="App">
      <h1>투어라이브</h1>
      <Nav setbBoards={setbBoards} />
      <BoardList boards={boards} setbBoards={setbBoards} />
      <h7>총 {boards.length}개의 게시글</h7>
    </div>
  );
};

export default App;
