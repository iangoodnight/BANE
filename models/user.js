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
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Login, {
      onDelete: "cascade"
    });
  };

  return User;
};