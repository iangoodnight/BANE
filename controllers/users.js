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
			password: req.body.password,
			roleId: null,
			employeeId: req.body.employeeId,
			active: true
		}).then(function(req) {
			res.json({});
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		});
	}
}