const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');

require('dotenv').config();

const port = 8000;

const uri = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@ibsa-web-cluster.canq8.mongodb.net/${process.env.DBDATABASE}?retryWrites=true&w=majority`;

/**
 * Setup Mongoose Connections
 */
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on("error", err => console.log(err))
db.once("open", () => {
    console.log("connection to IBSAServer database established")
})

let app = express();

/**
 * Set up middlewares
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors()) //CORS will be used as a development server dependency to test api calls from front end to backend.

/**
 * Set up routes to start with '/api'
 */
const routes = require('./routes/routes');
app.use('/api', routes);

/**
 * Set up React static assets to be served at '/'
 */
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/**
 * 404 Handler
 */
app.use((req, res, next) => {
    next(createError(404));
});

app.listen(process.env.PORT || port , () => {
    console.log(`Listening at port ${port}`);
})