const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require('mongoose');

const port = 8000;

/**
 * Setup Mongoose Connections
 */
mongoose.connect(
    'mongodb://localhost/IBSAServer', 
    {   
        useNewUrlParser: true, 
        useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on("error", err => console.log(err))
db.once("open", () => {
    console.log("connection to IBSAServer database established")
})

/**
 * Routes
 */
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const updateRouter = require('./routes/update')
const deleteRouter = require('./routes/delete')

let app = express();

/**
 * Set up middlewares
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Map routes
 */
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);

/**
 * 404 Handler
 */
app.use((req, res, next) => {
    next(createError(404));
});

app.listen(port , () => {
    console.log(`Listening at port ${port}`);
})
