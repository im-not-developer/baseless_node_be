const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { Account } = require('../config');

router.use(cookieParser());

// 로그인 get
router.get('/signin', function(req, res, next) {
  Account.findOne({
    where : {userid : 'test3', password : 'testpw3'}
  })
  .then(function(user){
    if(user == null){ 
      res.status(200).send('찾을 수 없습니다.');
    }else{  
      if(req.cookies){
        console.log("1번:",req.cookies);
      }else{
        
        let token = jwt.sign({
          type: 'JWT',
          id: user.userid,
        }, user.password , {
          expiresIn: '15m',
          issuer: 'kjh'
        });
        
        res.cookie('accountToken', token, {
          httpOnly:true
        });
        
        console.log("2번:",req.cookies)
      }
      res.send('signin');
    }
  })
});

router.get('/getUserData', (req, res) => {

  console.log(req.cookies);
  jwt.verify(req.cookies, 'testpw3', (err, decoded) => {
    if(err){
      console.log('에러');
    }else{
      res.send(decoded);
    }
  })
})

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
    userid : "test3",
    password : "testpw3",
    phoneno : "01000000003",
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
