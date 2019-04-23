// Controller for our users
// ==============================
// Dependencies
// Require our database models
const db = require('../models');
const Op = db.Sequelize.Op;

module.exports = {
	// Retrieve
	findOneById: function(req, res) {
		console.log("employeeId: " + req.params.employeeId);
		console.log("typeof: " + typeof req.params.employeeId);
		db.People.findAll({ 
			where: { 
				employeeId: parseInt(req.params.employeeId)
			},
			include: [{
				all: true
			}]
		}).then(dbPeople => {
			console.log(dbPeople)
			return res.json({
				msg: 'search results',
				people: dbPeople
			});
		}).catch(err => {
			console.log(err);
			res.json(err);
		})
	}
}