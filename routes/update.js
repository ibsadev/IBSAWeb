const express = require('express');
const router = express.Router();
const axios = require('axios');
const PastEvents = require('../models/PastEvent');
const UpcomingEvents = require('../models/UpcomingEvent')
var archieml = require('archieml');

require('dotenv').config();

router.post('/', async(req, res, next) => {
    let {passcode} = req.body;
    if (passcode !== process.env.ADMIN_PASSWORD) {
        res.status(400).send("Invalid passcode")
    } else {
         let upcomingEvents = await getUpcomingEvents();
         let pastEvents = await getPastEvents();
         let messages1 = await storeUpcomingEventsToDatabase(upcomingEvents)
         let messages2 = await storePastEventsToDatabase(pastEvents, res)
         res.status(200).send([...messages1, ...messages2])
    }  
})

async function storeUpcomingEventsToDatabase(upcomingEvents, res) {
   let messages = [];

   for (let i = 0 ; i < upcomingEvents.length; i++) {
      let filter = {instagramPostID : upcomingEvents[i].instagramPostID};

      try{
         let items = await UpcomingEvents.find(filter);

         if (items.length === 0) {
            const eventData = new UpcomingEvents(upcomingEvents[i]);
            try {
               await eventData.save()
               messages.push({
                  success: true,
                  action: "save",
                  type: "Upcoming Events",
                  eventName: upcomingEvents[i].title,               
               })
            }
            catch(err) {
               messages.push({
                  success : false,
                  action : "save",
                  type: "Upcoming Events",
                  eventName: upcomingEvents[i].title
               })
            }
         } else {
            try {
               await UpcomingEvents.findOneAndUpdate(filter, upcomingEvents[i])
               messages.push({
                  success: true,
                  action: "update",
                  type: "Upcoming Events",
                  eventName: upcomingEvents[i].title,               
               })
            } catch (err) {
               messages.push({
                  success: false,
                  action: "update",
                  type: "Upcoming Events",
                  eventName: upcomingEvents[i].title
               })
            }
         }
      } catch (err) {
         res.status(400).send("Problem accessing the database, try again later")
      }
   }

   try {
      let items = await UpcomingEvents.find();
      for (let i = 0; i < items.length; i++) {
         if ( upcomingEvents.find(event => event.instagramPostID === items[i].instagramPostID) === undefined) {
            try {
               await UpcomingEvents.findOneAndDelete( {instagramPostID : items[i].instagramPostID})
               messages.push({
                  success: true,
                  type: "Upcoming Events",
                  action : "delete",
                  eventName : items[i].title
               })
            } catch (err) {
               messages.push({
                  success: false,
                  action : "delete",
                  type: "Upcoming Events",
                  eventName: items[i].title
               })
            }
         }
      }
   } catch (err) {
      res.status(400).send("Problem accessing the database, try again later")
   }

   return messages;
}

async function storePastEventsToDatabase(pastEvents, res) {
   let messages = [];

   for (let i = 0 ; i < pastEvents.length; i++) {
      let filter = {instagramPostID : pastEvents[i].instagramPostID};

      try{
         let items = await PastEvents.find(filter);

         if (items.length === 0) {
            const eventData = new PastEvents(pastEvents[i]);
            try {
               await eventData.save()
               messages.push({
                  success: true,
                  action: "save",
                  type: "Past Events",
                  eventName: pastEvents[i].title,               
               })
            }
            catch(err) {
               messages.push({
                  success : false,
                  action : "save",
                  type: "Past Events",
                  eventName: pastEvents[i].title
               })
            }
         } else {
            try {
               await UpcomingEvents.findOneAndUpdate(filter, pastEvents[i])
               messages.push({
                  success: true,
                  action: "update",
                  type: "Past Events",
                  eventName: pastEvents[i].title,               
               })
            } catch (err) {
               messages.push({
                  success: false,
                  action: "update",
                  type: "Past Events",
                  eventName: pastEvents[i].title
               })
            }
         }
      } catch (err) {
         res.status(400).send("Problem accessing the database, try again later")
      }
   }

   try {
      let items = await UpcomingEvents.find();
      for (let i = 0; i < items.length; i++) {
         if ( pastEvents.find(event => event.instagramPostID === items[i].instagramPostID) === undefined) {
            try {
               await PastEvents.findOneAndDelete( {instagramPostID : items[i].instagramPostID})
               messages.push({
                  success: true,
                  action : "delete",
                  type: "Past Events",
                  eventName : items[i].title
               })
            } catch (err) {
               messages.push({
                  success: false,
                  action : "delete",
                  type: "Past Events",
                  eventName: items[i].title
               })
            }
         }
      }
   } catch (err) {
      res.status(400).send("Problem accessing the database, try again later")
   }

   return messages;
}
/**
 * Function to get upcoming events from instagram api, filter and arrange JSON
 * based on the Schema
 */
 async function getUpcomingEvents(res) {
   try {
      let response = await axios.get(`https://graph.instagram.com/me/media?fields=media_type,permalink,media_url,caption,timestamp,children{media_url}&access_token=${process.env.IG_ACC_TOKEN_ADMIN}`)
      let data = response.data.data;

      let filteredData = data.filter(items => items.media_type === "IMAGE");
      let mappedData = filteredData.map(items => {
         results = archieml.load(items.caption)

         // for extra protection, convert all object keys into lower case.
         let key, keys = Object.keys(results);
         let n = keys.length;
         let newobj={}
         while (n--) {
            key = keys[n];
            newobj[key.toLowerCase()] = results[key];
         }
         results = newobj;

         results.instagramPostID = items.id;
         results.imageURL = items.media_url;
         results.startTime = results.startTime !== undefined ? new Date(results.startTime) : undefined;
         results.endTime = results.endTime !== undefined ? new Date(results.endTime) : undefined;
         results.postDate = new Date(items.timestamp)
         return results;
      })
      return mappedData;
   } catch (err) {
      res.status(400).send("Error fetching instagram data. You might need to update the admin token")
   }
    
}


/**
 * Function to get past events from instagram api, filter and arrange JSON
 * based on the Schema
 */
 async function getPastEvents(res) {
   try {
      let response = await axios.get(`https://graph.instagram.com/me/media?fields=media_type,permalink,media_url,caption,timestamp,children{media_url}&access_token=${process.env.IG_ACC_TOKEN_ADMIN}`)
      let data = response.data.data;
   
      // Filter past events by type carousel post
      let filteredData = data.filter(items => items.media_type === "CAROUSEL_ALBUM");
   
      // Clean instagram api data to get what we want 
      let mappedData = filteredData.map(items => {
         results = archieml.load(items.caption);
   
         // for extra protection, convert all object keys into lower case.
         let key, keys = Object.keys(results);
         let n = keys.length;
         let newobj={}
         while (n--) {
            key = keys[n];
            newobj[key.toLowerCase()] = results[key];
         }
         results = newobj;
   
         results.instagramPostID = items.id;
         results.date = results.date !== undefined ? new Date(results.date) : undefined;
         images = items.children.data.map(item => item.media_url)
         results.images = images;
         return results;
      })
      return mappedData;
   } catch (err) {
      res.status(400).send("Error fetching instagram data. You might need to update the admin token")
   }
}

module.exports = router;