// Requiring our models and passport as we've configured it
var db = require('../../models');
// Require our configured 'Passport' for user authentication.
var passport = require('../../config/passport');
// Import the 'express' module...
var express = require('express');
// ..to expose the express.Router() function
var router = express.Router();

// Route for getting data about our user to be used client side.
// Routes defined as '/api/'
router.get('/', function(req, res) {
	if (!req.user) {
		// The user is not logged in, send back an empty object.
		res.json({});
	} else {
		// Otherwise, send back the user's username and id
		// Sending back the password, even a hashed password isn't a good idea
		res.json({
			username: req.user.username,
			id: req.user.id
		});
	}
});

module.exports = router;