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
	var admin; 
	req.user ? admin = req.user.administrator: admin = false;
  console.log(req.user);
  res.render('index', { 
  	title: 'BANE',
  	user: req.user,
  	active: {
  		active_home: true,
  		admin: admin
  	} 
  })
});

router.get('/admin', function(req, res, next) {
	var admin; 
	req.user ? admin = req.user.administrator: admin = false;
	console.log(req);
	db.User.findAll({
		order: [
			["username", "ASC"]
		]
	})
	.then(function(dbUser) {
		var hbsObject = {
			user: dbUser,
			active: {
				active_admin: true,
				admin: admin
			}
		};
		return res.render('admin', hbsObject);
	});	
});

router.get('/dashboard', function(req, res, next) {
	var admin; 
	req.user ? admin = req.user.administrator: admin = false;
	if (req.user) {
		res.render('dashboard', { 
			user: req.user,
			active: {
				active_dashboard: true,
				admin: admin
			} 
		});
	}
});

// Export the router object for access.
module.exports = router;