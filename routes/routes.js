const express = require('express');
const router = express.Router();

/**
 * Routes
 */
const loginRouter = require('./login');
const userRouter = require('./user');
const holidayRouter = require('./holidays');

/**
 * Map routes
 */
router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/holidays', holidayRouter);

module.exports = router;
