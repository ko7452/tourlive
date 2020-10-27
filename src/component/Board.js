import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Board = ({ history, boards }) => {
  // 게시글의 내용을 보여줍니다
  const homeButton = () => {
    history.push("/");
  };
  console.log("boads 게시글 받아옴??", boards);
  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>
                <Row>
                  <Col xs={6} md={1}>
                    제목
                  </Col>
                  <Col xs={6} md={9}>
                    "(예시)국제부 기자가 들려주는 오사카성 투어"
                    <br />
                    빌드중...(data.result[0].title)
                  </Col>
                  <Col xs={6} md={2}>
                    작성일
                  </Col>
                </Row>
              </td>
            </tr>
          </thead>
        </Table>
      </Container>
      <Container>
        <Table striped bordered hover>
          <Row>
            <Col xs={6} md={1} />
            <Col xs={6} md={9}>
              "국제부 기자가 들려주는 오사카성 투어"
              <br />
              빌드중...(data.result[0].title)
            </Col>
            <Col xs={6} md={4} />
          </Row>
        </Table>
      </Container>
      <button onClick={homeButton}>목록</button>
    </div>
  );
};

export default Board;
