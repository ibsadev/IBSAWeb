const express = require('express');
const router = express.Router();
const axios = require('axios');
const UpcomingEvent = require('../models/UpcomingEvent');
const PastEvent = require('../models/PastEvent');

require('dotenv').config();

router.get('/homepage', async(req, res, next) => {
   try {
      let results = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,permalink,media_url&access_token=${process.env.IG_ACC_TOKEN}`)
      res.status(200).send(results.data)
   } catch (err) {
      return next(err)
   }
})

router.get('/pastevents', async(req, res, next) => {
   try {
      PastEvent.find({}, (err, items) => {
         if (err) {
            res.status(500).send({
               message: "Failed to reach server, please try again later"
            })
            return;
         } 
         res.status(200).send(items);
      })
   } catch {
      return next(err)
   }
})

router.get('/upcomingevents', async(req, res, next) => {
   try {
      UpcomingEvent.find({}, (err, items) => {
         if (err) {
            res.status(500).send({
               message: "Failed to reach server, please try again"
            })
            return;
         }
         currentTimeInMillisecond = Date.now();
         filteredData = items.filter(item => Date.parse(item.endTime) > currentTimeInMillisecond)
         res.status(200).send(items)
      })
   } catch {
      return next(err)
   }
})

module.exports = router;