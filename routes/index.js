// Global Dependencies
// Import the 'express' module...
var express = require('express');
// ..to expose the express.Router() function
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// 'res.render()' renders a view and sends the rendered HTML back to the client. 
	// res.render(view [, locals][, callback])
  res.render('index', { title: 'BANE' });
});

// Export the router object for access.
module.exports = router;
