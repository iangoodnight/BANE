// Global Dependencies
// Import the 'express' module...
var express = require('express');
// ..to expose the express.Router() function
var router = express.Router();
// Require our API routes
var apiRoutes = require('./api');
// Require our view routes
var viewRoutes = require('./view');

// Send api requests to the API router.
router.use('/api', apiRoutes);
// Send other requests to the view router.
router.use('/', viewRoutes);

// Export the router object for access.
module.exports = router;
