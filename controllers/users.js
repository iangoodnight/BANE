// Controller for our users
// ==============================
// Dependencies
// Require our database models
var db = require('../models');

// module.exports = {
	// Create
// 	newUser: function(req, res) {
// 		db.User.create({
// 			firstName: req.body.firstName,
// 			lastName: req.body.lastName,
// 			active: true,
// 			Login: { // Include Login Model to update both tables at once and create the relationship
// 				username: req.body.username,
// 				password: req.body.password
// 			},
// 			email: req.body.email
// 		}).then(function(req) {
// 			// res.json({});
// 		}).catch(function(err) {
// 			console.log(err);
// 			res.json(err);
// 		});
// 	}
// }

module.exports = {
	// Create
	newUser: function(req, res) {
		db.User.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			active: true,
			email: req.body.email,
			Login: {
				username: req.body.username,
				password: req.body.password,
			}
		}, {
			include: [
				{
					model: db.Login
				}
			]
		}).then(function(req) {
			res.json({});
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		});
	}
}