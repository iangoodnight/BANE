'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemNumber: {
        type: Sequelize.STRING
      },
      formula: {
        type: Sequelize.STRING
      },
      raw: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      box: {
        type: Sequelize.STRING
      },
      bottle: {
        type: Sequelize.STRING
      },
      cap: {
        type: Sequelize.STRING
      },
      misc1: {
        type: Sequelize.STRING
      },
      misc2: {
        type: Sequelize.STRING
      },
      misc3: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Products');
  }
};