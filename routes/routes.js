const express = require('express');
const router = express.Router();

/**
 * Routes
 */
const loginRouter = require('./login');
const userRouter = require('./user');

/**
 * Map routes
 */
router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;
