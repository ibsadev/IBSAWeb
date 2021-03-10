const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();
const User = require('../models/User')

const bcrypt = require('bcrypt');
const bcryptSaltRounds = 10;

require('dotenv').config();

const isUCLAemail = (email) => {
    if (email.includes('@g.ucla.edu') === false || email.includes('@ucla.edu') === false) {
        return false
    }
    return true
}

/** 
 * Random string generation for user email verification 
 */
const randString = () => {
    /* Change this value to randomize length, 8 should be enough */
    const len = 8;
    let rand = ''; // Temp hold
    const charAvail = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Characters to choose from
    const charLen = charAvail.length; // Length
    /* Generate random string by randomly picking values from the above */
    for(let i = 0; i < len; i++) {
        rand += charAvail.charAt(Math.floor(Math.random() * charLen));
    }

    return rand;
}

/**
 * Creates new user
 */
router.post('/', async (req, res, next) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const phone = req.body.phone;
        const classes = [];
        const isVerified = false;
        const verificationLink = randString(); // Generate random string for verification

        if (isUCLAemail(email) === false) {
            res.status(400).send({
                success: false,
                message: "Email must be ucla.edu or g.ucla.edu"
            })
        }
        
        const hashedPassword = bcrypt.hashSync(password, bcryptSaltRounds);
        const lastGeneratedLink = new Date();

        const user = new User({
            firstName,
            lastName,
            email,
            password : hashedPassword,
            phone,
            isVerified,
            verificationLink,
            lastGeneratedLink,
            classes
        })

        try {
            const newUser = await user.save()
            console.log("here1");

            /* Create reusable transporter object using the default SMTP transport */
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.VERIF_EMAIL,
                    pass: process.env.VERIF_PW 
                }
            });
            console.log("here2");

            let info = await transporter.sendMail({
                from: '"No-Reply Bruins IBSA" <noreply.bruins.ibsa@gmail.com>', // sender address
                to: email, // list of receivers
                subject: "Please verify your email address", // Subject line
                html: `Welcome to the IBSA Bruins website. Please verify your email by clicking <a href=${process.env.VERIF_URL_BASE}/verify/${verificationLink}>here</a>`, // HTML text body
            });
            console.log("here3");

            // console.log("Message sent: %s", info.messageId);

            res.status(201).send({ 
                success: true,
                message: "User successfully created", 
                createdUser: {...newUser._doc}
            })
        } catch (err) {
            res.status(400).send({message: err.message})
        }
    }
    catch (err) {
        return next(err);
    }
})

/**
 * Update user info
 */
router.put('/', async(req, res, next) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const phone = req.body.phone;

        if (validEmail(email) === false) {
            res.status(400).send({
                success: false,
                message: "Email must be ucla.edu or g.ucla.edu"
            })
        }

        const filter = {
            email
        }
        const update = {
            firstName,
            lastName,
            email,
            phone,
        }

        try {
            const updatedUser = await User.findOneAndUpdate(filter, update, { new: true})
            res.status(200).json({ 
                message: "User successfully updated!", 
                updatedUser: {...updatedUser._doc} 
            })
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
    catch (err) {
        return next(err);
    }
})

/**
 * Delete user
 */
router.delete('/', async(req, res, next) => {
    try {
        const email = req.body.email;

        const filter = {
            email
        }
        try {
            const deletedUser = await User.findOneAndDelete(filter)
            res.status(200).json({ 
                message: "User successfully deleted!", 
                deletedUser: {...deletedUser._doc} 
            })
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
    catch (err) {
        return next(err);
    }
})

module.exports = router;
