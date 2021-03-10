const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const User = require('./models/User'); // TODO: Move this along with verification

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
 * This is essentially an email verification link handler
 * Will take the parameter and verify that user by setting their isVerified to true
 * TODO: Move this into a better file but discuss with Bryan first
 */
app.get('/verify/:uniqueString', async (req, res, next) => {
    /* Gets the unique string sent in email link */
    const { uniqueString } = req.params;
    if(uniqueString == '-') {
        res.send('Invalid');
    }

    /* Get user with the unique verification link */
    const user = await User.findOne({ verificationLink: uniqueString });
    
    /* Timeout */
    const TIMEOUT=10*60*1000; // Can increase
    const CUR_TIME = new Date();

    if(user) {
        /* Set user to be verified */
        const DIF = CUR_TIME - user.lastGeneratedLink;

        if(user.isVerified) {
            res.send('User is verified')
        }

        if(DIF < TIMEOUT) {
            user.isVerified = true;
            user.verificationLink = "-";
            await user.save();
            res.redirect('/');
        } else {
            res.send('Error: timeout')
        }
    } else {
        next(createError(404));
    }
})

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