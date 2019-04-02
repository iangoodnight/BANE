// Global Dependencies
// Requiring our models and passport as we've configured it
var db = require('../../models');
// Require our custom middleware to check if a user is logged in
var isAuthenticated = require('../../config/middleware/isAuthenticated');
// Import the 'express' module...
var express = require('express');
// ..to expose the express.Router() function
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// 'res.render()' renders a view and sends the rendered HTML back to the client. 
	// res.render(view [, locals][, callback])
  res.render('index', { title: 'BANE' });
});

router.get('/admin', function(req, res, next) {
	db.User.findAll({
		order: [
			["username", "ASC"]
		]
	})
	.then(function(dbUser) {
		var hbsObject = {
			user: dbUser
		};
		return res.render('admin', hbsObject);
	});	
});

router.get('/dashboard', function(req, res, next) {
	if (req.user) {
		res.render('dashboard', { user: req.user });
	}
});

// Export the router object for access.
module.exports = router;