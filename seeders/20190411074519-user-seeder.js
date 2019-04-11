"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const password = bcrypt.hashSync("rahasia", 10);
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "IKHDA MUHAMMAD WILDANI",
          username: "ikhda",
          password: password,
          email: "ikhdamuhammad@gmail.com",
          phone: "081225746433",
          isActived: true,
          isEmailVerified: true,
          tempPinVerify: "coba",
          rewardPoint: 700,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Users", null, {});
  }
};
