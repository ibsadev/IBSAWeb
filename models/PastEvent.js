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
       require: true,
    },
    description: {
        type: String,
        required: true
    },
    images: {
         type: Array,
         require: true,
    }
})

const PastEvent = mongoose.model("Past Event", PastEventSchema)
module.exports = PastEvent;