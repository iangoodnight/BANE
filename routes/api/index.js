// Require our router module
var router = require('express').Router();
// Require our user routes
var userRoutes = require('./user');
// Require our authorization routes
var authRoutes = require('./auth');
// Require our admin routes
var adminRoutes = require('./admin');

router.use('/', userRoutes);
router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);

module.exports = router;