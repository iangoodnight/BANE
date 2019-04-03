// 'use strict';
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

// Creating our User model
//Set it as export because we will need it required on the server
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	unique: true
    },
    email: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	unique: true,
    	validate: {
    		isEmail: true
    	}
    },
    password: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    administrator: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  // Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
  	return bcrypt.compareSync(password, this.password);
  }
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate(function(user) {
  	user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};