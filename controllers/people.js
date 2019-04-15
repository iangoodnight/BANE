// Controller for our users
// ==============================
// Dependencies
// Require our database models
const db = require('../models');
const Op = db.Sequelize.Op;

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
	findOneById: function(req, res) {
		console.log("employeeId: " + req.params.employeeId);
		console.log("typeof: " + typeof req.params.employeeId);
		db.People.findOne({ 
			where: { 
				employeeId: parseInt(req.params.employeeId)
			}
		}).then(function(dbPeople) {
			console.log(dbPeople)
			return res.json({
				msg: 'search results',
				people: dbPeople
			});
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		})
	}
}