const express = require('express');
const router = express.Router();

// 라우터
const mainRouter = require('./main');
const accountRouter = require('./account');

// 라우트 추가해주기
router.use('/', mainRouter);
router.use('/account', accountRouter);

module.exports = router;