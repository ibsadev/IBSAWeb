/**
 * This schema is intended to map courses with users.
 * Main purpose of this schema is for the classmate finder feature
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseUserSchema = new Schema({
    courseID : {
        type: Number,
        required: true,
        unique: true,
    },
    users: {
        type: Array
    }
});

const CourseUser = mongoose.model("Course", courseUserSchema)
module.exports = CourseUser;