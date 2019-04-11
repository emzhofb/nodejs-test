'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAccount = sequelize.define('UserAccount', {
    deviceSignUp: DataTypes.STRING,
    deviceLastSignIn: DataTypes.DATE,
    socialMediaProvider: DataTypes.STRING,
    ovoSaldo: DataTypes.INTEGER
  }, {});
  UserAccount.associate = function(models) {
    // associations can be defined here
  };
  return UserAccount;
};