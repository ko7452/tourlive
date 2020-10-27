import React, { useState } from "react";

import Nav from "./Nav";
import BoardList from "./BoardList";
import Board from "./Board";

const BoardHome = () => {
  const [boards, setbBoards] = useState([]);
  // console.log("app에서 사용하네", boards);

  return (
    <div className="App">
      <Nav setbBoards={setbBoards} />
      <BoardList boards={boards} setbBoards={setbBoards} />
    </div>
  );
};

export default BoardHome;
