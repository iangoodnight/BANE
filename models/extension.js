'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extension = sequelize.define('Extension', {
    ext: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    username: DataTypes.STRING,
    macAddress: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  }, {});
  Extension.associate = function(models) {
    // associations can be defined here
    // models.Task.belongsTo(models.People, {
    //   foreignKey: {
    //     allowNull: true
    //   }
    // });
  };
  return Extension;
};