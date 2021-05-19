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
        // Stores success and error messages here to be returned to the frontend.
        let successMessages = [];
        let errorMessages = [];

        /**
         * Store upcoming events, but updates if there is already an existing event with
         * the corresponding instagram post ID.
         */
        getUpcomingEvents().then(
            upcomingEvents => {
                console.log(upcomingEvents)
                upcomingEvents.forEach(event => {
                    let filter = {instagramPostID: event.instagramPostID};
                    UpcomingEvents.find(filter, (err, items) => {
                        if (err) {
                            res.status(400).send(
                                "Problem accessing database, please try again"
                            )
                            return;
                        }
                        const eventData = new UpcomingEvents(event)

                        // Store the new upcoming events into database if it is a new post
                        if (items.length === 0) {
                            eventData.save((err) => {
                                if (err) {
                                    errorMessages.push(`Error saving upcoming event titled "${event.title}" into database. ${err}`); 
                                    return;
                                }
                                successMessages.push(`Successfully saved upcoming event titled "${event.title}"`)
                        })
                        return;

                        // Update the upcoming events into database if it is exists
                        } else if (items.length !== 0) {
                            UpcomingEvents.findOneAndUpdate(filter, event, null, (err, doc) => {
                                if (err) {
                                    errorMessages.push(`Error updating upcoming event titled "${event.title}" into database`); 
                                    return;
                                }
                                successMessages.push(`Successfully updated upcoming event titled "${event.title}"`)
                            })
                        }
                    })
                })
                // Delete upcoming events if it is deleted from the instagram API
                UpcomingEvents.find( (err, items) => {
                    if (err) {
                        res.status(400).json({
                            success: false,
                            message: "Error accessing the dataabse, try again later"
                        })
                    }
                    items.forEach(item => {
                    if ( upcomingEvents.find( event => event.instagramPostID === item.instagramPostID) === undefined ) {
                        UpcomingEvents.findOneAndDelete( {instagramPostID : item.instagramPostID}, (err, doc) => {
                            if (err) {
                                errorMessages.push(`Error deleting upcoming event titled "${item.title}" into database`); 
                                return;
                            }
                            successMessages.push(`deleted upcoming event titled "${item.title}"`)
                        })
                    }
                    })
                })
            }
        ).then(
            getPastEvents().then( 
                pastEvents => {
                    console.log(pastEvents);
                    pastEvents.forEach(event => {
                        let filter = {instagramPostID: event.instagramPostID};
                        PastEvents.find(filter, (err, items) => {
                            if (err) {
                                res.status(400).json({
                                    success: false,
                                    message: "Problem accessing upcoming event in Database, try again later"
                                }) 
                                return;
                            }
                            const eventData = new PastEvents(event)
            
                            // Store the past events into the database if there it is a new post
                            if (items.length === 0) {
                            eventData.save((err) => {
                                if (err) {
                                    errorMessages.push(`Error saving past event titled "${event.title}" into database`);
                                    return;
                                }
                                successMessages.push(`Successfully saved past event titled "${event.title}"`)
                            })
                            return;
            
                            // Update the past events in the database if it exists.
                            } else if (items.length !== 0) {
                            PastEvents.findOneAndUpdate(filter, event, null, (err, doc) => {
                                if (err) {
                                    errorMessages.push(`Error updating past event titled "${event.title}" into database`); 
                                    return;
                                }
                                successMessages.push(`Successfully updated past event titled "${event.title}"`)
                            })
                            }
                        })
                    })
                    // Delete past event from database if it is deleted from the Instagram API.
                    PastEvents.find( (err, items) => {
                        if (err) {
                            res.status(400).json({
                                success: false,
                                message: "Problem accessing past events in Database, try again later",
                            })
                            return;
                        }
                        items.forEach(item => {
                            if ( pastEvents.find( event => event.instagramPostID === item.instagramPostID) === undefined ) {
                            PastEvents.findOneAndDelete( {instagramPostID : item.instagramPostID}, (err, doc) => {
                                if (err) {
                                    errorMessages.push(`Error deleting past event titled "${item.title}" into database`); 
                                    return;
                                }
                                successMessages.push(`deleted past event titled "${item.title}"`)
                            })
                            }
                        })
                    })
                }
            ).then(
                res.status(200).json({errorMessages, successMessages})
            ).catch(err => {
                res.status(400).send(err.message)
            })
        ).catch(err => {
            res.status(400).send(err.message)
        })
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
    return Promise.resolved(mappedData);
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
 
       results.instagramPostID = items.id;
       results.date = results.date !== undefined ? new Date(results.date) : undefined;
       images = items.children.data.map(item => item.media_url)
       results.images = images;
       return results;
    })
    return Promise.resolved(mappedData);
}

// let upcomingEvents = await getUpcomingEvents();
//         upcomingEvents.forEach(event => {
//             let filter = {instagramPostID: event.instagramPostID};

//             UpcomingEvents.find(filter, (err, items) => {
//                 if (err) {
//                     res.status(400).json({
//                         success: false,
//                         message: "Problem accessing database, please try again"
//                     })
//                     return;
//                 }
//                 const eventData = new UpcomingEvents(event)

//                 // Store the new upcoming events into database if it is a new post
//                 if (items.length === 0) {
//                     eventData.save((err) => {
//                         if (err) {
//                             errorMessages.push(`Error saving upcoming event titled "${event.title}" into database. ${err}`); 
//                             return;
//                         }
//                         successMessages.push(`Successfully saved upcoming event titled "${event.title}"`)
//                 })
//                 return;

//                 // Update the upcoming events into database if it is exists
//                 } else if (items.length !== 0) {
//                     UpcomingEvents.findOneAndUpdate(filter, event, null, (err, doc) => {
//                         if (err) {
//                             errorMessages.push(`Error updating upcoming event titled "${event.title}" into database`); 
//                             return;
//                         }
//                         successMessages.push(`Successfully updated upcoming event titled "${event.title}"`)
//                     })
//                 }
//             })
//         })
//         // Delete upcoming events if it is deleted from the instagram API
//         UpcomingEvents.find( (err, items) => {
//             if (err) {
//                 res.status(400).json({
//                     success: false,
//                     message: "Error accessing the dataabse, try again later"
//                 })
//             }
//             items.forEach(item => {
//             if ( upcomingEvents.find( event => event.instagramPostID === item.instagramPostID) === undefined ) {
//                 UpcomingEvents.findOneAndDelete( {instagramPostID : item.instagramPostID}, (err, doc) => {
//                     if (err) {
//                         errorMessages.push(`Error deleting upcoming event titled "${item.title}" into database`); 
//                         return;
//                     }
//                     successMessages.push(`deleted upcoming event titled "${item.title}"`)
//                 })
//             }
//             })
//         })


        // /**
        //  * Stores past events, but updates if there is already an existing past event with
        //  * the coresponding instagram post ID
        //  */
        //  let pastEvents = await getPastEvents();
        //  pastEvents.forEach(event => {
        //      let filter = {instagramPostID: event.instagramPostID};
        //      PastEvents.find(filter, (err, items) => {
        //          if (err) {
        //              res.status(400).json({
        //                  success: false,
        //                  message: "Problem accessing upcoming event in Database, try again later"
        //              }) 
        //              return;
        //          }
        //          const eventData = new PastEvents(event)
 
        //          // Store the past events into the database if there it is a new post
        //          if (items.length === 0) {
        //          eventData.save((err) => {
        //              if (err) {
        //                  errorMessages.push(`Error saving past event titled "${event.title}" into database`);
        //                  return;
        //              }
        //              successMessages.push(`Successfully saved past event titled "${event.title}"`)
        //          })
        //          return;
 
        //          // Update the past events in the database if it exists.
        //          } else if (items.length !== 0) {
        //          PastEvents.findOneAndUpdate(filter, event, null, (err, doc) => {
        //              if (err) {
        //                  errorMessages.push(`Error updating past event titled "${event.title}" into database`); 
        //                  return;
        //              }
        //              successMessages.push(`Successfully updated past event titled "${event.title}"`)
        //          })
        //          }
        //      })
        //  })
 
        //  // Delete past event from database if it is deleted from the Instagram API.
        //  PastEvents.find( (err, items) => {
        //      if (err) {
        //          res.status(400).json({
        //              success: false,
        //              message: "Problem accessing past events in Database, try again later",
        //          })
        //          return;
        //      }
        //      items.forEach(item => {
        //          if ( pastEvents.find( event => event.instagramPostID === item.instagramPostID) === undefined ) {
        //          PastEvents.findOneAndDelete( {instagramPostID : item.instagramPostID}, (err, doc) => {
        //              if (err) {console.log(`Error deleting past event titled "${item.title}" into database`); return;}
        //              console.log(`deleted past event titled "${item.title}"`)
        //          })
        //          }
        //      })
        //  })
 
        //  res.status(200).json({
        //      success: true,
        //      errorMessages,
        //      successMessages,
        //  })

module.exports = router;