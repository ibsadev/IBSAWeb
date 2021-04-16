const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Event Schema
 */
const UpcomingEventSchema = new Schema({
    postDate: {
        type: Date,
        required: true
    },
    instagramPostID: {
        type: String,
        required: true,
    },
    imageURL:{
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    instagramImageLink: {
        type: String,
        required: true,
    },
    formLink: {
        type: String,
        required: true,
    },
})

const UpcomingEvent = mongoose.model("Upcoming Event", UpcomingEventSchema)
module.exports = UpcomingEvent;