const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Event Schema
 */
const PastEventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    instagramPostID: {
        type: String,
        required: true,
    },
    date: {
       type: Date,
       required: true,
    },
    description: {
        type: String,
    },
    images: {
        type: Array,
        required: true,
    }
})

const PastEvent = mongoose.model("Past Event", PastEventSchema)
module.exports = PastEvent;