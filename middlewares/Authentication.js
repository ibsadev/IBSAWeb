const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../shared/constants');

/**
 * Middleware to validate JWT token
 */
const middleware = function (req, res, next) {
    try {
        let token = req.cookies.jwt;

        if (!token) {
            res.status(401).send('Token not found');
            return;
        }

        jwt.verify(token, JWT_SECRET_KEY, function (err, decoded) {
            if (err || (decoded && decoded.exp <= getSecondsElapsedSinceJanuary1970())) {
                res.status(401).send('Token invalid');
                return;
            }
            else {
                next();
            }
        })
    }
    catch (err) {
        next(err);
    }
}

function getSecondsElapsedSinceJanuary1970() {
    return Math.floor(Date.now() / 1000);
}

module.exports = middleware;
