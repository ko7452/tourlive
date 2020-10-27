import React from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroup from "react-bootstrap/ListGroup";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import Table from "react-bootstrap/Table";

const BoardListEntry = ({ boards }) => {
  console.log("boards의 title =>> ", boards);
  return (
    <div>
      <Container>
        <Row Row className="justify-content-md-center">
          <Col xs={6} md={1}>
            {boards.id}
          </Col>
          <Col xs={6} md={8}>
            <NavLink
              to={{ pathname: "/board", query: { title: boards.title } }}
            >
              {boards.title}
            </NavLink>
          </Col>
          <Col xs={6} md={3}>
            {boards.created_at.substring(0, 10)}
            {/* 날짜만 나올 수 있도록  substring() */}
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
