const express = require('express');
const router = express.Router();
const Holidays = require('date-holidays');

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
            start: element.start,
            end: element.end,
            allDay: true
        })
    });

    // console.log(holidays);

    res.status(200).json(parsedHolidays);
});

module.exports = router;