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

    console.log(email, password)

    if (!email || !password) {
        res.json({message: "Please specify username and password"});
        return
    }

    User.find({ email:email }, (err, user) => {
        if (err) {
            res.status(500).json({message: "Problem logging in, try again"});
            return
        }
        else if (user.length === 0) {
            res.status(401).json({message:"Username not found"});
            return
        }

        if (bcrypt.compareSync(password, user[0].password)) {
            let token = jwt.sign({
                "exp": Math.floor(Date.now() / 1000) + oneHourInSeconds,
                "usr": email
            }, JWT_SECRET_KEY, {
                header: {
                    "alg": "HS256",
                    "typ": "JWT"
                }
            })
            res.cookie("jwt", token);
            res.status(200).json({message:"Login successful"})
        }
        else {
            res.status(401).json({message: "Login failed (Wrong password)"})
        }
    })
})

module.exports = router;
