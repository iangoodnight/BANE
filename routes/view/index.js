// Require our router module
var router = require('express').Router();
// Require our public routes
var publicRoutes = require('./public');
// Require our private routes
// var privateRoutes = require('./private');

router.use('/', publicRoutes);
// router.use('/a', privateRoutes);

module.exports = router;