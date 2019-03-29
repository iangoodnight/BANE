// Dependencies
var express = require('express');
var router = express.Router();

/* GET users listing. */
// Defines routes that begin '/users'
router.get('/', function(req, res, next) {  // 'next' shows this function to be middleware.
  res.send('respond with a resource');
});

router.get('/cool/', function(req, res, next) {  // Just for fun.
  res.send('You\'re so cool!');
});

module.exports = router;
