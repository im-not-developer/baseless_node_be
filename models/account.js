/**
 * Account 테이블 만들기  
 * @param {Sequelize} 
 * @param {DataTypes}  
 * 회원번호, 회원아이디, 비밀번호, 전화번호, 상태, 가입일
 */

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('account', {
      id: {
        type: DataTypes.STRING(20),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
        primaryKey: true
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      phoneno: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      status: { // 회원 상태 여부 (참이면 회원가입 중 거짓이면 회원 탈퇴중)
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('now()') // 회원이 생길 때 자동으로 날짜가 등록이 됨
      },
    }, {
      timestamps: false,  // 생성일을 Sequelize가 자동으로 생성하지 말라는 옵션 
      underscored: true,   // Snake Case를 권장한다는 옵션
    })
  }
  