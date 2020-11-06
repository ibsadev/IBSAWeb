const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Course Schema
 */
const courseSchema = new Schema({
    courseID : {
        type: Number,
        required: true,
        unique: true,
    },
    courseNumber : {
        type: String,
        required: true
    },
    courseName : {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
});


const Course = mongoose.model("Course", courseSchema)
module.exports = Course;