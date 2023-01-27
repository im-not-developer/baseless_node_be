const express = require('express');
const app = express();
const router = express.Router();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { Account } = require('../config');

app.use(cookieParser());
app.set('views', '../views');
app.set('view engine', 'ejs');

/* GET main page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

module.exports = router;
