import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Board = ({ history }) => {
  // 게시글의 내용을 보여줍니다
  const homeButton = () => {
    history.push("/");
  };
  //   console.log("boads 받아옴??", boards);
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
                  <Col xs={6} md={7}>
                    제목: data.result.tilte
                  </Col>
                  <Col xs={6} md={4}>
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
              data.result.tilte <br />
              "[렌트카 타고 듣는 오디오 투어] 오키나와 북부 여행"
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
