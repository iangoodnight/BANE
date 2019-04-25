'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    employeeId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    department: DataTypes.STRING,
    laborType: DataTypes.STRING,
    position: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  People.associate = function(models) {
    // associations can be defined here
    People.hasOne(models.User, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE'
    });
    People.hasOne(models.Extension, {
      foreignKey: 'employeeId',
    });
    People.hasOne(models.Email, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE'
    });
  };
  return People;
};