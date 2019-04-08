'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('People', [{
        employeeId: 661,
        lastName: 'Doe',
        firstName: 'Jon',
        createdAt: '2019-04-05',
        updatedAt: '2019-04-05'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('People', null, {});
    
  }
};
