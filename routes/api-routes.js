// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');

module.exports = function(app) {
	// Using the passport.authenticate middleware with our local strategy.
	// If the user has valid login credentials, send them to their dashboard.
	// Otherwise, the user will be sent an error
	app.post('/api/login', passport.authenticate('local'), function(req, res) {
		// Since we are doing a POST with javascript, we can't actually redirect that post into a GET request.
		// So, we're sending the used back the route to the dashboard because the redirect will happen on the front end.
		//  They won't get this or even be able to access this page if they aren't authed
		res.json('/dashboard');
	});
	// Route for registering a user.  The user's password is automatically hashed and stored securely.
	// This is done through our configured Sequelize User model.
	// If the user is created successfully, proceed to log (for dev).
	// Otherwise, send back an error.
	app.post('/api/signup', function(req, res) {
		console.log(req.body);
		db.User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		}).then(function() {
			res.redirect(307, '/api/login');
		}).catch(function(err) {
			console.log(err);
			res.json(err);
			// res.status(422).json(err.errors[0].message);
		});
	});
	//Route for logging user out
	app.get('/logout', function(req, res) {
		if (!req.user) {
			// The user is not logged in, send back an empty object.
			res.json({});
		} else {
			// Otherwise, send back the user's username and id
			// Sending back the password, even a hashed passwordm isn't a good idea
			res.json({
				username: req.user.username,
				id: req.user.id
			});
		}
	});
};