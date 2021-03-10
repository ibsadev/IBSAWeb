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

        if (isUCLAemail(email) === false) {
            res.status(400).send({
                success: false,
                message: "Email must be ucla.edu or g.ucla.edu"
            })
        }
        
        const hashedPassword = bcrypt.hashSync(password, bcryptSaltRounds);

        const user = new User({
            firstName,
            lastName,
            email,
            password : hashedPassword,
            phone,
            classes
        })

        try {
            const newUser = await user.save()

            /* Create reusable transporter object using the default SMTP transport */
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.VERIF_EMAIL,
                    pass: process.env.VERIF_PW 
                }
            });

            let info = await transporter.sendMail({
                from: '"No-Reply Bruins IBSA" <noreply.bruins.ibsa@gmail.com>', // sender address
                to: email, // list of receivers
                subject: "Definitely not spam", // Subject line
                text: "PP SMOL", // plain text body
            });

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
