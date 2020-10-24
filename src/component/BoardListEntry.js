import React from "react";

const BoardListEntry = ({ boards }) => {
  console.log("엔트리 왔다갔다", boards.title);
  return (
    <div>
      <div>
        {boards.id}
        {boards.title}
      </div>
    </div>
  );
};

export default BoardListEntry;

//   const boardList = boards.map((data) => (
//     <li key={data.results}>{data.results}</li>
// return <ul>{boardList}</ul>;
//   ));
