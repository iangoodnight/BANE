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
  console.log(req.user);
  res.render('index', { 
  	title: 'BANE',
  	user: req.user,
  	active: {
		user: req.user ? true: false,
  		active_home: true,
  		admin: req.user ? req.user.roleId: 0
  	} 
  })
});

router.get('/login', function(req, res, next) {
	res.render('login', {
		user: req.user,
	  active: {
			user: req.user ? true: false,
		  admin: req.user ? req.user.roleId: 0
	  }
	});
});

router.get('/directory', function(req, res, next) {
	db.People.findAll({
		order: [
			["lastName", "ASC"]
		]
	})
	.then(function(dbPeople) {
		var hbsObject = {
			user: req.user,
			people: dbPeople,
			active: {
				user: req.user ? true: false,
				active_directory: true,
				admin: req.user ? req.user.roleId: 0
			}
		};
		return res.render('directory', hbsObject);
	});
});

router.get('/admin', function(req, res, next) {
	console.log(req);
	db.User.findAll({
		order: [
			["username", "ASC"]
		]
	})
	.then(function(dbUser) {
		var hbsObject = {
			user: req.user,
			active: {
				user: req.user ? true: false,
				active_admin: true,
		  	admin: req.user ? req.user.roleId: 0
			}
		};
		return res.render('admin', hbsObject);
	});	
});

router.get('/dashboard', function(req, res, next) {
	console.log(req.user);
	if (req.user) {
		res.render('dashboard', { 
			user: req.user,
			active: {
				user: req.user ? true: false,
				active_dashboard: true,
		  	admin: req.user ? req.user.roleId: 0
			} 
		});
	}
});

// Export the router object for access.
module.exports = router;