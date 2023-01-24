const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 라우터
const indexRouter = require('./routes/index');
const accountRouter = require('./routes/account');

// DB 테이블 생성 모듈
const {sequelize} = require('./config');

const app = express();

// DB 테이블 생성
// 개발 중에는 기존 테이블을 삭제하고 데이터베이스를 다시 동기화해야 할 수 있습니다. force: true다음 코드로 사용
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

  
// 여기에 라우트 추가하고, 라우트 내부에 파일만 추가해주면 됨
app.use('/', indexRouter);
app.use('/account', accountRouter);

  
// 404 핸들러
app.use(function(req, res, next) {
  next(createError(404));
});

// 에러 핸들러
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
