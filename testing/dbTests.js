// For testing database relationships

const models = require('../models');
const args = process.argv.slice(2);

console.log(args);

switch (args[0]) {

	case 'createPeople':
		createPeople();
		break;
	case 'findPeople':
		findPeople();
		break;
	case 'createEmail':
		createEmail();
		break;
	default:
		console.log("I don't recognize that command");

}

// Testing 'People'
function createPeople() {
	models.People.create({
		employeeId: 667,
		lastName: 'Morningstar',
		firstName: 'Larry',
		department: '666 - Hell - Eternity',
		laborType: 'Indirect',
		position: 'Manager',
		location: 'Hell - Seventh Circle'
	});  // Success 2019-05-07
};

function findPeople() {
	models.People.findAll({
		where: {
			employeeId: args[1]
		},
		include: [{
			all: true
		}]
	}).then(dbPeople => {
		console.log(dbPeople);
	}).catch(err => {
		console.log(err);
	})
}

// Testing 'People'
function createEmail() {
	models.Email.create({
		email: args[1],
		employeeId: args[2],
	});  // Success 2019-05-07
};