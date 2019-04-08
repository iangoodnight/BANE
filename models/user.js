'use strict';

// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
//Set it as export because we will need it required on the server
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      unique: true,
      validate: {

      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {

      }
    },
    roleId: {
      type: DataTypes.INTEGER
    },
    employeeId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    active: {
      allowNull: false,
      default: true,
      type: DataTypes.BOOLEAN
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    // User.belongsTo(models.People, {
    //   // onDelete: "cascade"
    // });
  };
  // Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //Login can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  }
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate(function(login) {
    login.password = bcrypt.hashSync(login.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};