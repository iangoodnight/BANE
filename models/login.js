'use strict';

// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

// Creating our Login model.  Abstracted from user for quicker read speeds.
//Set it as export to be grabbed by index.
module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define('Login', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Login.associate = function(models) {
    // associations can be defined here
    Login.belongsTo(models.User);
  };
  // Creating a custom method for our Login model. 
  //This will check if an unhashed password entered by the 
  //Login can be compared to the hashed password stored in our database
  Login.prototype.validPassword = function(password) {
  	return bcrypt.compareSync(password, this.password);
  }
  // Hooks are automatic methods that run during various phases of the Login Model lifecycle
  // In this case, before a Login is created, we will automatically hash their password
  Login.beforeCreate(function(login) {
  	login.password = bcrypt.hashSync(login.password, bcrypt.genSaltSync(10), null);
  });
  return Login;
};