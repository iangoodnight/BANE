// Requiring our models and passport as we've configured it
var db = require('../../models');
// Require our configured 'Passport' for user authentication.
var passport = require('../../config/passport');
// Import the 'express' module...
var express = require('express');
// ..to expose the express.Router() function
var router = express.Router();

// Routes defined as '/api/auth'
// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to their dashboard.
// Otherwise, the user will be sent an error
router.post('/', passport.authenticate('local'), function(req, res) {
	// Since we are doing a POST with javascript, we can't actually redirect that post into a GET request.
	// So, we're sending the used back the route to the dashboard because the redirect will happen on the front end.
	//  They won't get this or even be able to access this page if they aren't authed
	res.json('/dashboard');
});

//Route for logging user out
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = router;