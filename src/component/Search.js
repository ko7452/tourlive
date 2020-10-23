import React, { useState } from "react";

// 검색 기능
// 주제별 검색 기능
// 총 몇건의 게시글을 표시
const Search = () => {
  const [search, setSearch] = useState("");

  const searchHandleClick = (e) => {
    // console.log("search word", search);
    setSearch(e.target.value);
  };

  const onSubmitHandleClick = (e) => {
    console.log("검색어: ", search);
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandleClick}>
      <div>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={searchHandleClick}
        />
        <input type="submit" value="검색" />
      </div>
    </form>
  );
};

export default Search;
