const express = require('express');
const router = express.Router();
const Holidays = require('date-holidays');

const Event = require('../models/Event')

const getEvents = () => {
    return Event.find({}).exec();
}

/**
 * Holiday handler
 */
router.get('/', async (req, res) => {
    var hdUS = new Holidays();
    var hdID = new Holidays();

    hdUS.init('US');
    hdID.init('ID');

    var holidaysUS = hdUS.getHolidays();
    var holidaysID = hdID.getHolidays();

    var holidays = holidaysUS.concat(holidaysID);

    var parsedHolidays = [];

    holidays.forEach(element => {
        parsedHolidays.push({
            title: element.name,
            start: element.end,
            end: element.end,
            image: "none",
            linkToEvent: "none",
            allDay: true
        })
    });

    var eventsList = [];

    eventsList = await getEvents();

    var parsedEvents = [];

    eventsList.forEach(element => {
        parsedEvents.push({
            title: element.eventTitle,
            start: element.startTime,
            end: element.endTime,
            image: element.instagramImageLink,
            linkToEvent: element.eventLink,
            allDay: false
        })
    });

    // console.log(parsedEvents);

    var listToReturn = parsedEvents.concat(parsedHolidays)

    res.status(200).json(listToReturn);
});

module.exports = router;