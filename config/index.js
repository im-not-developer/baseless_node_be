const Sequelize = require('sequelize');
require("dotenv").config();  // dotenv 모듈
const db = {};                                             // 모듈화 할 때 필요한 빈 객체
 
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});  

db.Sequelize = Sequelize;  // 빈 db객체에 Sequelize 패키지 넣기
db.sequelize = sequelize;  // 빈 db객체에 Sequelize 인스턴스 넣기

db.Account = require('../models/account')(sequelize, Sequelize);
module.exports = db;  // 모듈화