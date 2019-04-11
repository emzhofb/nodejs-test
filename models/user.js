'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    isActived: DataTypes.BOOLEAN,
    isEmailVerified: DataTypes.BOOLEAN,
    tempPinVerify: DataTypes.STRING,
    rewardPoint: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};