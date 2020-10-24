import React, { useState } from "react";

import { searchTour } from "../searchTour";

// 검색 기능
// 주제별 검색 기능
// 총 몇건의 게시글을 표시
const Search = ({ setbBoards }) => {
  const [search, setSearch] = useState("");

  const searchHandleClick = (e) => {
    // console.log("search word", search);
    setSearch(e.target.value);
  };

  const searchTour = (key) => {
    fetch(
      `http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours?search=${key}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        console.log("response search", res);
        return res.json();
      })
      .then((res) => {
        console.log("검색데이터", res.data.results);
        setbBoards(res.data.results);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onSubmitHandleClick = async (e) => {
    console.log("검색어: ", search);
    e.preventDefault();
    searchTour(search);
    // await setbBoards(searchTour("스페인"));
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
