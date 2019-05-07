'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersRole = sequelize.define('UsersRole', {
    user: DataTypes.STRING,
    roleID: DataTypes.INTEGER
  }, {});
  UsersRole.associate = function(models) {
    // associations can be defined here
    UsersRole.belongsTo(models.User, {
    	foreignKey: 'username'
    })
    UsersRole.belongsTo(models.Role, {
    	foreignKey: 'roleId'
    })
  };
  return UsersRole;
};