// Requiring our models and passport as we've configured it
var db = require('../../models');
// Require our user controller for Sequelize logic.
var userController = require('../../controllers/users')
// Require our configured 'Passport' for user authentication.
var passport = require('../../config/passport');
// Import the 'express' module...
var express = require('express');
// ..to expose the express.Router() function
var router = express.Router();

// Routes defined as '/api/admin'
// Route for registering a user.  The user's password is automatically hashed and stored securely.
// This is done through our configured Sequelize User model using our userController.
router.post('/', userController.newUser);

module.exports = router;