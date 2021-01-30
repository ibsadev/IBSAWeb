const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Event Schema
 */
const eventSchema = new Schema({
    eventTitle: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    instagramImageLink: {
        type: String,
        required: true
    },
    eventLink: {
        type: String,
        required: true
    }
})

const Event = mongoose.model("Event", eventSchema)
module.exports = Event;