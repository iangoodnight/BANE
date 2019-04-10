// Controller for our users
// ==============================
// Dependencies
// Require our database models
var db = require('../models');

module.exports = {
	// Create
	// newUser: function(req, res) {
	// 	db.User.create({
	// 		username: req.body.username,
	// 		password: req.body.password,
	// 		roleId: null,
	// 		employeeId: 666,
	// 		active: true
	// 	}).then(function(req) {
	// 		res.json({});
	// 	}).catch(function(err) {
	// 		console.log(err);
	// 		res.json(err);
	// 	});
	// }
	// Retrieve
	findAllById: function(req, res) {
		console.log(req.params.employeeId);
		console.log(typeOf(req.params.employeeId));
		db.People.findAll({ 
			limit: 10,
			where: { 
				employeeId: {
					$contains: req.params.employeeId
				}
			}
		}).then(function(assets) {
			return res.json({
				msg: 'search results',
				assets: assets
			});
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		})
	}
}