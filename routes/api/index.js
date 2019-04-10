// Require our router module
var router = require('express').Router();
// Require our user routes
var userRoutes = require('./user');
// Require our authorization routes
var authRoutes = require('./auth');
// Require our admin routes
var adminRoutes = require('./admin');
// Require our people routes
var peopleRoutes = require('./people');

router.use('/', userRoutes);
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/people', peopleRoutes);

module.exports = router;