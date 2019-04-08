'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role: DataTypes.STRING,
    permissions1: DataTypes.BOOLEAN,
    permissions2: DataTypes.BOOLEAN,
    permissions3: DataTypes.BOOLEAN,
    permissions4: DataTypes.BOOLEAN
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.User, {
      foreignKey: 'roleId'
    })
  };
  return Role;
};