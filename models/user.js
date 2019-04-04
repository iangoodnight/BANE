'use strict';

// Creating our User model
//Set it as export because we will need it required on the server
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
    	type: DataTypes.BOOLEAN,
    	allowNull: false,
      default: true
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Login, {
      onDelete: "cascade"
    });
    User.hasMany(models.Email, {
      onDelete: "cascade"
    });
  };

  return User;
};