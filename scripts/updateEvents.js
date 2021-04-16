/**
 * UPDATE EVENTS : This is a one time script that parses through the instagram (@notbisa)
 * and then updates the database with both past and upcoming events. 
 * 
 * The script will also check the current instagram data and the data in the mongoDB database.
 * If the data on mongoDB database does not match the data from instagram API, then it is deleted.
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
var archieml = require('archieml');
const { compareSync } = require('bcrypt');

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
               console.log("Problem accessing upcoming event in Database, try again later") 
               return;
            }
            const eventData = new UpcomingEvents(event)

            // Store the new upcoming events into database if it is a new post
            if (items.length === 0) {
               eventData.save((err) => {
                  if (err) {console.log(`Error saving upcoming event titled "${event.title}" into database. ${err}`); return;}
                  console.log(`Successfully saved upcoming event titled "${event.title}"`)
               })
               return;

            // Update the upcoming events into database if it is exists
            } else if (items.length !== 0) {
               UpcomingEvents.findOneAndUpdate(filter, event, null, (err, doc) => {
                  if (err) {console.log(`Error updating upcoming event titled "${event.title}" into database`); return;}
                  console.log(`Successfully updated upcoming event titled "${event.title}"`)
               })
            }
         })
      })
      // Delete upcoming events if it is deleted from the instagram API
      UpcomingEvents.find( (err, items) => {
         if (err) {
            console.log("Problem accessing past events in Database, try again later")
            return;
         }
         items.forEach(item => {
            if ( upcomingEvents.find( event => event.instagramPostID === item.instagramPostID) === undefined ) {
               UpcomingEvents.findOneAndDelete( {instagramPostID : item.instagramPostID}, (err, doc) => {
                  if (err) {console.log(`Error deleting upcoming event titled "${item.title}" into database`); return;}
                  console.log(`deleted upcoming event titled "${item.title}"`)
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
               console.log("Problem accessing upcoming event in Database, try again later") 
               return;
            }
            const eventData = new PastEvents(event)

            // Store the past events into the database if there it is a new post
            if (items.length === 0) {
               eventData.save((err) => {
                  if (err) {console.log(`Error saving past event titled "${event.title}" into database`); return;}
                  console.log(`Successfully saved past event titled "${event.title}"`)
               })
               return;

            // Update the past events in the database if it exists.
            } else if (items.length !== 0) {
               PastEvents.findOneAndUpdate(filter, event, null, (err, doc) => {
                  if (err) {console.log(`Error updating past event titled "${event.title}" into database`); return;}
                  console.log(`Successfully updated past event titled "${event.title}"`)
               })
            }
         })
      })

      // Delete past event from database if it is deleted from the Instagram API.
      PastEvents.find( (err, items) => {
         if (err) {
            console.log("Problem accessing past events in Database, try again later")
            return;
         }
         items.forEach(item => {
            if ( pastEvents.find( event => event.instagramPostID === item.instagramPostID) === undefined ) {
               PastEvents.findOneAndDelete( {instagramPostID : item.instagramPostID}, (err, doc) => {
                  if (err) {console.log(`Error deleting past event titled "${item.title}" into database`); return;}
                  console.log(`deleted past event titled "${item.title}"`)
               })
            }
         })
      })

   } catch(err) {
      console.log("There was an error in uploading data into the database");
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
}

/**
 * Function to get past events from instagram api, filter and arrange JSON
 * based on the Schema
 */
async function getPastEvents() {
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
      console.log(results)

      results.instagramPostID = items.id;
      results.date = results.date !== undefined ? new Date(results.date) : undefined;
      images = items.children.data.map(item => item.media_url)
      results.images = images;
      return results;
   })
   return mappedData;
}
