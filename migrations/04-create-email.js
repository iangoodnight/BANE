'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Emails', {
      email: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      employeeId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Emails');
  }
};