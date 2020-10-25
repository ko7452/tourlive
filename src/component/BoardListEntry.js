import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BoardListEntry = ({ boards }) => {
  // console.log("boards의 title =>> ", boards.title);
  return (
    <div>
      <Container>
        <Row Row className="justify-content-md-center">
          <Col xs={6} md={1}>
            <tr>{boards.id}</tr>
          </Col>
          <Col xs={6} md={7}>
            {boards.title}
          </Col>
          <Col xs={6} md={4}>
            {boards.created_at}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BoardListEntry;

//   const boardList = boards.map((data) => (
//     <li key={data.results}>{data.results}</li>
// return <ul>{boardList}</ul>;
//   ));
