// Controller for our users
// ==============================
// Dependencies
// Require our database models
var db = require('../models');

module.exports = {
	// Create
	newUser: function(req, res) {
		db.User.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			active: true,
			Login: { // Include Login Model to update both tables at once and create the relationship
				username: req.body.username,
				password: req.body.password
			},
			Email: {
				email: req.body.email
			}
		}, {
			// include: [{
				include: [
			  	db.Login, // Necessary to sync post
			  	db.Email
			  ]
			// }]
		}).then(function(req) {
			// res.json({});
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		});
	}
}

// module.exports = {
// 	// Create
// 	newUser: function(req, res) {
// 		db.Login.create({
// 			username: req.body.username,
// 			password: req.body.password,
// 			user: { // Include Login Model to update both tables at once and create the relationship
// 				firstName: req.body.firstName,
// 				password: req.body.password,
// 				emails: [{
// 					email: req.body.email
// 				}]
// 			},
// 		}, {
// 			include: [{
// 				association: db.User,
// 				include: [
// 			  	// db.Login, // Necessary to sync post
// 			  	db.Emails
// 			  ]
// 			}]
// 		}).then(function(req) {
// 			// res.json({});
// 		}).catch(function(err) {
// 			console.log(err);
// 			res.json(err);
// 		});
// 	}
// }