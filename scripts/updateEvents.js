/**
 * UPDATE EVENTS : This is a one time script that parses through the instagram (@notbisa)
 * and then updates the database with both past and upcoming events
 * 
 * Differentiate types of events through:
 * - UPCOMING : media_type: IMAGE
 * - PAST : media_type: CAROUSEL_ALBUM
 * 
 * The caption used on the instagram to obtain data is formatted such a way that it follows
 * the convention of Archie Markup Language (Archie ML), read the docs: http://archieml.org/
 */

var mongoose = require('mongoose');
const axios = require('axios')
const UpcomingEvents = require('../models/UpcomingEvent')
const PastEvents = require('../models/PastEvent')
var archieml = require('archieml')

require('dotenv').config();
 
// make a connection
const uri = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@ibsa-web-cluster.canq8.mongodb.net/${process.env.DBDATABASE}?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', async function() {
   try {
      /**
       * Store upcoming events, but updates if there is already an existing event with
       * the corresponding instagram post ID.
       */
      let upcomingEvents = await getUpcomingEvents();
      upcomingEvents.forEach(event => {
         let filter = {instagramPostID: event.instagramPostID};
         UpcomingEvents.find(filter, (err, items) => {
            if (err) {
               console.log("Problem searching upcoming event in Database, try again later") 
               return;
            }
            const eventData = new UpcomingEvents(event)
            if (items.length === 0) {
               eventData.save((err) => {
                  if (err) {console.log(`Error saving upcoming event titled "${event.title}" into database`); return;}
                  console.log(`Successfully saved upcoming event titled "${event.title}"`)
               })
               return;
            } else if (items.length !== 0) {
               UpcomingEvents.findOneAndUpdate(filter, event, null, (err, doc) => {
                  if (err) {console.log(`Error updating upcoming event titled "${event.title}" into database`); return;}
                  console.log(`Successfully updated upcoming event titled "${event.title}"`)
               })
            }
         })
      })

      /**
       * Stores past events, but updates if there is already an existing past event with
       * the coresponding instagram post ID
       */
      let pastEvents = await getPastEvents();
      pastEvents.forEach(event => {
         let filter = {instagramPostID: event.instagramPostID};
         PastEvents.find(filter, (err, items) => {
            if (err) {
               console.log("Problem searching past event in Database, try again later") 
               return;
            }
            const eventData = new PastEvents(event)
            if (items.length === 0) {
               eventData.save((err) => {
                  if (err) {console.log(`Error saving past event titled "${event.title}" into database`); return;}
                  console.log(`Successfully saved past event titled "${event.title}"`)
               })
               return;
            } else if (items.length !== 0) {
               PastEvents.findOneAndUpdate(filter, event, null, (err, doc) => {
                  if (err) {console.log(`Error updating past event titled "${event.title}" into database`); return;}
                  console.log(`Successfully updated past event titled "${event.title}"`)
               })
            }
         })
      })
   } catch(err) {
      console.log("There was an error in uploading data into the database")
   }
})

/**
 * Function to get upcoming events from instagram api, filter and arrange JSON
 * based on the Schema
 */
async function getUpcomingEvents() {
   let response = await axios.get(`https://graph.instagram.com/me/media?fields=media_type,permalink,media_url,caption,timestamp,children{media_url}&access_token=${process.env.IG_ACC_TOKEN_ADMIN}`)
   let data = response.data.data;
   let filteredData = data.filter(items => items.media_type === "IMAGE");
   let mappedData = filteredData.map(items => {
      results = archieml.load(items.caption)
      results.instagramPostID = items.id;
      results.imageURL = items.media_url;
      results.startTime = new Date(results.startTime);
      results.endTime = new Date(results.endTime);
      results.postDate = new Date(items.timestamp)
      return results;
   })
   return mappedData;
}

/**
 * Function to get past events from instagram api, filter and arrange JSON
 * based on the Schema
 */
async function getPastEvents() {
   let response = await axios.get(`https://graph.instagram.com/me/media?fields=media_type,permalink,media_url,caption,timestamp,children{media_url}&access_token=${process.env.IG_ACC_TOKEN_ADMIN}`)
   let data = response.data.data;
   let filteredData = data.filter(items => items.media_type === "CAROUSEL_ALBUM");
   let mappedData = filteredData.map(items => {
      results = archieml.load(items.caption);
      results.instagramPostID = items.id;
      results.date = new Date(results.date)
      images = items.children.data.map(item => item.media_url)
      results.images = images;
      return results;
   })
   return mappedData;
}