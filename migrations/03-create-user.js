'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      username: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      roleId: {
        references: {
          model: 'Roles',
          key: 'id'
        },
        type: Sequelize.INTEGER,
      },
      employeeId: {
        allowNull: false,
        references: {
          model: 'People',
          key: 'employeeId'
        },
        type: Sequelize.INTEGER,
        unique: true
      },
      active: {
        allowNull: false,
        default: true,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Users');
  }
};