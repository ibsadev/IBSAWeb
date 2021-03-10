const express = require('express');
const router = express.Router();
const User = require('../models/User')

const bcrypt = require('bcrypt');
const bcryptSaltRounds = 10;

const isUCLAemail = (email) => {
    if (email.includes('@g.ucla.edu') === false || email.includes('@ucla.edu') === false) {
        return false
    }
    return true
}

/**
 * Creates new user
 * TODO : Verify Email to be able to access the account.
 */
router.post('/', async (req, res, next) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const phone = req.body.phone;
        const classes = [];

        // TODO: this should be handled by React
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
