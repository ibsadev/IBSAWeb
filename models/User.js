const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * User Schema
 */
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    classes: {
        type: Array
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User;