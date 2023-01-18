const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("홈페이지");
});

// 로그인
router.get("/signin", (req, res) => {
  let template = `
    <form action='/signin' method='post'>
        <p><input type="text" placeholder="ID" id="id"></p>
        <p><input type="password" placeholder="Password" id="password"></p>
        <p><input type=submit value="제출"></p>
    </form>
    `;
  res.send(template);
});

// 로그인
router.post("/signin", (req, res) => {
  res.redirect("/");
});

// 회원가입
router.get("/signup", (req, res) => {
  let template = `
    <form action='/signup' method='post'>
        <p><input type="text" placeholder="ID" id="id"></p>
        <p><input type="password" placeholder="Password" id="password"></p>
        <p><input type="text" placeholder="이름" id="name"></p>
        <p><input type="text" placeholder="전화번호" id="phone"></p>
        <p><input type="text" placeholder="이메일" id="email"></p>
        <p><input type=submit value="제출"></p>
    </form>
    `;
  res.send(template);
});

// 회원가입
router.post("/signup", (req, res) => {
  res.redirect("/signin");
});

module.exports = router;

// res.json -> 스웨거에서 작업
// 계정정보를 받아 DB에 연결했다고 가정하고 맞는 값이면 맞는 값을 보내주고, 틀린 값이면 틀린 값을 보내주기
// 로그인도 마찬가지로. 회원가입같은 경우는 뭘 받아도 상관없게끔 제작
// 로그인 같은 경우엔 없는 값이면 안됨

// JWT 확인.
