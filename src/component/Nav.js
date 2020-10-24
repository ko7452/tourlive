import React from "react";

import Search from "./Search";

const Nav = ({ setbBoards }) => (
  <nav>
    <div>
      <Search setbBoards={setbBoards} />
    </div>
  </nav>
);

export default Nav;
