const express = require('express');
const router = express.Router();
const {sequelize}  = require('./models');

sequelize.sync();

// 로그인 get
router.get('/signin', function(req, res, next) {
  res.status(200).send('signin page');
});

// 회원가입 get
router.get('/signup', function(req, res, next) {
  
  let userData = {
    id : "2",
    userid : "test",
    password : "testpw",
    phoneno : "01000000000",
    status : "TRUE"
  }
  
  pg.query(`INSERT INTO accounts (id, userid, password, phoneno, status) VALUES 
            ('${userData.id}, ${userData.userid}, ${userData.password}', ${userData.phoneno}, ${userData.status});`, 
            (err, result)=>{
    if(err){
      res.sendStatus(500);
    }else{
      res.status(200).json(result.rows);
    }
  })
});

module.exports = router;
