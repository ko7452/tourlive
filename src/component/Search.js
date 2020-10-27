import React, { useState } from "react";
// import { searchTour } from "../searchTour";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// 검색 기능
// 주제별 검색 기능
// 총 몇건의 게시글을 표시
const Search = ({ setbBoards }) => {
  const [search, setSearch] = useState("");

  const searchHandleClick = (e) => {
    // console.log("search word", search);
    setSearch(e.target.value);
  };

  const BOARD_URL = `http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours`;
  const searchTour = (key) => {
    fetch(BOARD_URL + `?search=${key}`, {
      method: "GET", // GET, POST, PUT, DELETE, etc.
      mode: "cors",
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        // console.log("response search", res);
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
    // console.log("검색어: ", search);
    e.preventDefault();
    searchTour(search);
    // await setbBoards(searchTour("스페인"));
  };

  return (
    <div>
      <h1>투어라이브</h1>
      <form onSubmit={onSubmitHandleClick}>
        <Container>
          <Table striped bordered hover>
            <Navbar bg="Danger" expand="lg">
              <Navbar.Brand>게시판</Navbar.Brand>
              <Nav className="mr-auto"></Nav>
              <div>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={search}
                  onChange={searchHandleClick}
                />
                <input variant="outline-success" type="submit" value="검색" />
              </div>
            </Navbar>
          </Table>
        </Container>
      </form>
    </div>
  );
};

export default Search;

{
  /* <NavDropdown title="검색" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">제목</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">주제</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">닉네임</NavDropdown.Item>
            </NavDropdown> */
}
