const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';         // 개발용 환경 설정
const config = require('./config.json')[env];      // Sequelize 설정 파일
const db = {};                                             // 모듈화 할 때 필요한 빈 객치

// Sequelize 인스턴스화 (config 파일에 있는 정보들을 여기에 담아줌)
const sequelize = new Sequelize(config.database, config.username, config.password, config);  

db.Sequelize = Sequelize;  // 빈 db객체에 Sequelize 패키지 넣기
db.sequelize = sequelize;  // 빈 db객체에 Sequelize 인스턴스 넣기

db.Account = require('../models/account.js')(sequelize, Sequelize);
module.exports = db;  // 모듈화