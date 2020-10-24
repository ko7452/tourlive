// import fetch from "node-fetch";

// export const searchTour = (key) => {
//   fetch(
//     `http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours?search=${key}`,
//     {
//       method: "GET",
//     }
//   )
//     .then((res) => {
//       console.log("response search", res);
//       return res.json();
//     })
//     .then((res) => {
//       console.log("검색데이터", res.data.results);
//       return res.data.results;
//     })
//     .catch((err) => {
//       console.log("err", err);
//     });
// };

// export const searchBoard = () => {
//   fetch(
//     `http://tourlive-code-test-1586978259.ap-northeast-2.elb.amazonaws.com/v1/tours`,
//     {
//       method: "GET",
//     }
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log("이거 뭐나오지?", res.data.results);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log("err", err);
//     });
// };
/*
.then((res) => {
    console.log("이거 뭐나오지?", res.data.results);
    return res.data;
  })
*/
