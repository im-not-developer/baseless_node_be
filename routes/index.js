const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { Account } = require('../config');

router.use(cookieParser());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.clearCookie('accountToken', eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwiaWQiOiJ0ZXN0MyIsImlhdCI6MTY3NDc2MjQwNSwiZXhwIjoxNjc0NzYzMzA1LCJpc3MiOiJramgifQ.hfk3-HNv93K7wWKPljBv7x4qS_LBEvc1moFOXDy_T4M, { 
    httpOnly: true
  });
  res.send('homepage');
});

module.exports = router;
