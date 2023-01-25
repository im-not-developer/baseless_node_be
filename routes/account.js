const express = require('express');
const router = express.Router();
const { Account } = require('../config');

// 로그인 get
router.get('/signin', function(req, res, next) {
  res.status(200).send('signin page');
});

// 회원가입 get
router.get('/signup', function(req, res, next) {
  // 전체 조회 : findAll()
  // 생성 : create()
  // 갱신 : update()
  // 삭제 : destroy()
  Account.findAll()
  .then((account) => { // findAll()에서 나온 결과를 .then(여기에 결과를 적어줌)
    res.json(account);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
});
  
// 회원가입 post
router.post('/signup', function(req, res, next){
  Account.create({
    userid : "test2",
    password : "testpw2",
    phoneno : "01000000002",
    status : "TRUE"
  })
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
});

module.exports = router;
