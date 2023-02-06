
// Require necessary NPM Packages
const express = require('express');


// Require ROute FIles
const indexRouter = require('./routes/index');



// INstantiate a Router (a mini app that only handles routes)
const router = express.Router();



const port =


/**
 * Action:    INDEX
 * Methond:    GET
 * URI:    /
 * Description:  Get the Root Route
 */

router.get('/', (req, res) => {
    res.json({message: 'Welcome to Blogn'});
});


// Export the Router so we can use it in the `server.js` file
module.exports = router;