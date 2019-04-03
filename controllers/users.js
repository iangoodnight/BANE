// Controller for our users
// ==============================
// Dependencies
// Require our database models
var db = require('../models');

module.exports = {
	// Create
	newUser: function(req, res) {
		db.User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		}).then(function(req, dbUser) {
			res.json({});
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		});
	}
}