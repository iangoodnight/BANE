// Requiring our models and passport as we've configured it
var db = require('../../models');
// Require our configured 'Passport' for user authentication.
var passport = require('../../config/passport');
// Import the 'express' module...
var express = require('express');
// ..to expose the express.Router() function
var router = express.Router();

// Routes defined as '/api/admin'
// Route for registering a user.  The user's password is automatically hashed and stored securely.
// This is done through our configured Sequelize User model.
// If the user is created successfully, proceed to log (for dev).
// Otherwise, send back an error.
router.post('/', function(req, res) {
	console.log(req.body);
	db.User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	}).then(function() {
		// res.redirect(307, '/login');
	}).catch(function(err) {
		console.log(err);
		res.json(err);
		// res.status(422).json(err.errors[0].message);
	});
});

module.exports = router;