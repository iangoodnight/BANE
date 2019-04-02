/* -->Defining the "app" object (instance of "express") to be passed on to our entry point at bin/www<--  */

// Module Dependencies ------------------

// 'Http-errors' creates http errors for express.
var createError = require('http-errors');
// 'express' framework handles our routing and simplifies http server instances.
var express = require('express');
// 'Path is a built-in node module providing utilities for working with file and directory paths.
//  Though 'path' is built into node, we require the modules we need to keep our apps lightweight.
var path = require('path');
// Parse body of HTTP requests for ease of access.
// Body-parser functions built into express as of version 4.16.0.  Accessible through 'express.json' and 'express.urlencoded'.
// var bodyParser = require('body-parser');
// Parse Cookie header and populate req.cookies with an object keyed by cookie names.
var cookieParser = require('cookie-parser');
// 'Session' allows us to track user sessions with passport.
var session = require('express-session');
// Our configured 'Passport' to handle user authentication.
var passport = require('./config/passport');
// 'Morgan' (named after 'Dexter') logs HTTP requests to the console for use in development.
var logger = require('morgan');
// Recompile .scss or .sass files automatically for express based http servers.
var sassMiddleware = require('node-sass-middleware');
// Handlebars support IS built into Express, but the express-handlebars package handles it a little nicer.
var exphbs = require('express-handlebars');

// End Module Dependencies -----------------

// Local Dependencies -----------------
// These are files we are creating and importing to be used in our app instance.
var routes = require('./routes');

// End Local Dependencies

// Initialize our 'app' (express instance).
var app = express();

// Build our 'app' object.

// app.set() is used to dictate application settings to the express instance stored within the variable 'app'.
// view engine setup
app.set('view engine', 'hbs');  // Sets up handlebars as our view engine called by res.render().
app.engine('hbs', exphbs({  // Configure our handlebars instance
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + 'views/partials'
}));

// Middleware
// At this point we are loading our middleware, in the order it is to be called, on every http request.
// app.use() is the syntax for mounting middleware at the specified path.  If not path is set, it defaults to '/' (all instances).
app.use(logger('dev')); // Log http requests
app.use(express.json()); // Based on body-parser, express.json() is built-in middleware that parses incoming requests with JSON payloads.
app.use(express.urlencoded({ extended: false })); // Based on body-parser, express.urlencoded() is built-in middleware that parses incoming requests with urlencoded payloads.
app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by cookie names.
app.use(sassMiddleware({ // Recompile .scss or .sass files automattically for express based http servers.
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public'))); // Dictates that root directory from which to serve static assets.
app.use('/javascripts', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/javascripts', express.static(__dirname + '/node_modules/popper.js/dist/umd')); // redirect popper.js JS
app.use('/javascripts', express.static(__dirname + '/node_modules/jquery/dist')); // redirect jQuery JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect bootstrap css
// We need to use sessions to keep track of our user's login status.
app.use(session({ secret: 'Leviathan', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Handle our routes as imported by our 'router' instances.
app.use(routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
