import React from "react";

const BoardList = () => {
  // 게시판 글 나열, map을 활용하여 뿌려주기
  // 게시글 상단 표시: 번호 / 제목 / 첨부파일 / 작성일 / 조회수
  return (
    <div>
      <div>board list</div>
    </div>
  );
};

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
