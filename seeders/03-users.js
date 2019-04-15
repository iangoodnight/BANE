'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Users', [{
        username: "ian.goodnight",
        password: "password",
        roleId: null,
        employeeId: 3693,
        active: true,
        createdAt: '2019-04-05',
        updatedAt: '2019-04-05'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
