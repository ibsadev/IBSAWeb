var mongoose = require('mongoose');
var fs = require('fs');

require('dotenv').config();
 
// make a connection
const uri = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@ibsa-web-cluster.canq8.mongodb.net/${process.env.DBDATABASE}?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
 
// get reference to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var obj = JSON.parse(fs.readFileSync('classes.json', 'utf8'));
var courseArr = obj['courses']
 
db.once('open', function() {
    console.log("Connection Successful!");
    
    // define Schema
    var courseSchema = mongoose.Schema({
        courseID: Number,
        courseNumber: String,
        courseName: String,
        subject: String
    });
 
    // compile schema to model
    var courses = mongoose.model('course', courseSchema, 'courses');

    // save multiple documents to the collection referenced by course Model
    courses.collection.insert(courseArr, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });
});