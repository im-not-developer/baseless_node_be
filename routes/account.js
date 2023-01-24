const express = require('express');
const router = express.Router();
const { Account } = require('../models');

// 로그인 get
router.get('/signin', function(req, res, next) {
  res.status(200).send('signin page');
});

// 회원가입 get
router.get('/signup', function(req, res, next) {
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
    id : "3",
    userid : "test1",
    password : "testpw1",
    phoneno : "01000000001",
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
