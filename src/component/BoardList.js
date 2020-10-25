import React, { useState, useEffect } from "react";

import BoardListEntry from "./BoardListEntry";
import { searchBoard } from "../searchTour";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// 게시판 글 나열, map을 활용하여 뿌려주기
// 게시글 상단 표시: 번호 / 제목 / 첨부파일 / 작성일 / 조회수
const BoardList = ({ boards, setbBoards }) => {
  // const [boards, setbBoards] = useState([]);

  const BOARD_URL = `http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours`;
  const searchBoard = () => {
    fetch(BOARD_URL, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("이거 뭐나오지?", res.data);
        setbBoards(res.data.results);
        // console.log("boards 이거 다른거", boards);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    searchBoard();
    // console.log("searchBoard 작동되니", boards); >> 빈배열 나옴
  }, []);
  // console.log("searchBoard 받아오는가 봐라", boards);

  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>
                <Row>
                  <Col xs={6} md={1}>
                    번호
                  </Col>
                  <Col xs={6} md={7}>
                    제목
                  </Col>
                  <Col xs={6} md={4}>
                    작성일
                  </Col>
                </Row>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {boards.map((boards) => (
                <BoardListEntry boards={boards} />
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
// const fetchInitialData = async () => {
//   const initialData = await searchBoard();
//   setbBoards(initialData);
//   console.log("initialData", searchBoard());
//   console.log("fetchInitialData");
// };
/*
// useEffect에 비동기를 적용하고, 데이터를 완전히 받오면 상태를 변경
  // 리렌더 발생하게 리팩토링
  useEffect(async () => {
    try {
      const initialData = await searchBoard();
      console.log("새로운 내용이 렌더링");
      setbBoards(initialData);
    } catch (err) {
      console.log(err);
    }
  }, []);
*/

/*
{searchAPI() === undefined ? <div>없음<div> : </div>searchAPI().results.map((title) => {
          return <BoardListEntry key={title} />
        })}
*/
/*
{lists.map((list) => (
        <BoardListEntry
          key={list}
          video={list}
          handleVideoListEntryTitleClick={handleBoardListEntryTitleClick}
        />
      ))}
*/
export default BoardList;

// const TOUR_URL = "http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v2/tours";
// const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/v2/tours`

/*
host: http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com
API URL: /v2/tours
EX URL: http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v2/tours
Action Type: List, Retreive
Allowed Method: GET
Not Allow Method: POST, PATCH, PUT, DELETE
*/

/*
* Query parameters
search: 검색 (text)
ordering: 정렬 (text)
page_size: 페이지 사이즈 (int)
cursor:  hash 커서 (text)
*/

/*
* curl example (리스트 * List)
curl http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v2/tours
curl http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v2/tours?search=일본
curl http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v2/tours?search=오키나와
curl http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v2/tours?ordering=-created_at
curl http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v2/tours?cursor=cD0yMDIwLTA5LTE0KzA0JTNBNTclM0ExMCUyQjAwJTNBMDA%3D
*/

/*
* curl example (상세 * Detail)
curl http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v2/tours/1
*/
