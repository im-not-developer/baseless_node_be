const express = require('express');
const router = express.Router();

// // DB 모듈
// const {Pool} = require('pg');
// const pg = new Pool({
//   user:'testuser',
//   host:'localhost',
//   database:'study',
//   password:'1234',
//   post:'5432'
// });

// // DB 연결 확인
// pg.connect(err=>{
//   if(err) console.log(err);
//   else{
//     console.log('DB success');
//   }
// })


// 로그인 get
router.get('/signin', function(req, res, next) {
  let userData = {
    id : "2",
    userid : "test",
    password : "testpw"
  }
  
  pg.query(`INSERT INTO account (id, userid, password) VALUES 
            ('${userData.id}, ${userData.userid}, ${userData.password}');`, 
            (err, result)=>{
    if(err){
      res.sendStatus(500);
    }else{
      res.status(200).send('login success');
      // res.status(200).json(result.rows);
    }
  })
});

// 회원가입 get
router.get('/signup', function(req, res, next) {
  res.send('signup');
});

module.exports = router;
