const express = require('express');
const router = express.Router();

/**
 * Routes
 */
const loginRouter = require('./login');
const userRouter = require('./user');
const instagramAPIrouter = require('./instagram')
const holidayRouter = require('./holidays');
const updateRouter = require('./update');

/**
 * Map routes
 */
router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/instagram', instagramAPIrouter)
router.use('/holidays', holidayRouter);
router.use('/update', updateRouter);

module.exports = router;
