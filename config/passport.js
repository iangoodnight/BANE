// We import passport packages required for authentication
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// We will need the models folder to check passport against
var db = require('../models');

// Telling passport we want to use a Local Strategy (vs google-auth etc).
// In other words, we want to login with username/email and password.
passport.use(new LocalStrategy(
	// Our users will sign in with a username, rather than email
	{
		usernameField: "username"
	},
	function(username, password, done) {
		// When a user tries to sign in, this code runs.
		db.User.findOne({
			where: {
				username: username
			}
		}).then(function(dbUser) {
			// If there is no user with the given username
			if (!dbUser) {
				return done(null, false, {
					message: 'Incorrect username.'
				});
			}
			// If there is a user with the given username, but the password the user gives us is incorrect
			else if (!dbUser.validPassword(password)) {
				return done(null, false, {
					message: 'Incorrect password.'
				});
			}
			// If none of the above, return the user
			return done(null, dbUser);
		});
	}
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user.
// Just consider this part boilerplate needed to make it all work.
passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

// Export our configured passport
module.exports = passport;