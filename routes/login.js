const express = require('express');
const router = express.Router();
const User = require('../models/User')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../shared/constants');

const oneHourInSeconds = 3600;

router.get('/', async(req, res) => {
    res.send("This is the login page")
})

/**
 * Login handler
 */
router.post('/', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // TODO: Move this logic to be handled by React
    if (!email || !password) {
        res.json({
            success:false,
            message: "Please specify username and password"});
        return
    }

    User.find({ email:email }, (err, user) => {
        if (err) {
            res.status(500).json({
                success:false,
                message: "Problem logging in, try again"});
            return
        }

        if (user.length === 0) {
            res.status(401).json({
                success:false,
                message:"Username not found"});
            return
        }

        if (bcrypt.compareSync(password, user[0].password)) {
            let token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + oneHourInSeconds,
                user: email,
            }, JWT_SECRET_KEY, {
                header: {
                    "alg": "HS256",
                    "typ": "JWT"
                }
            })
            res.status(200).json({
                success: true,
                token,
                user
            })
        }
        else {
            res.status(401).json({
                success: false,
                message: "Login failed (Wrong password)"
            })
        }
    })
})

module.exports = router;
