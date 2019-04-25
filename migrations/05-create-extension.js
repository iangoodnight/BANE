'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Extensions', {
      ext: {
        allowNull: false,
        primaryKey: true,      
        type: Sequelize.INTEGER,
        unique: true
      },
      type: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      macAddress: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      employeeId: {
        references: {
          model: 'People',
          key: 'employeeId'
        },
        type: Sequelize.INTEGER,
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Extensions');
  }
};