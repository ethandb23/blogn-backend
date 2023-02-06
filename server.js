// Require neccessary NPM Paclages
const express = require('express');
const mongoose = require('mongoose');

// Require DB config file
const db = require('./config/db');

//Establush database connnection
mongoose.connect(db, {useNewURIParser: true});
mongoose.connection.once('open',  () => console.log('Connected to MOongoDB'));

//Instantiante Express App Object
const app = express();



// Define PORT for the API to run on 
const port = process.env.PORT || 5000;


app.use(indexRouter);

// Start the server and listen for requests on the given port
app.listen(port, () => console.log (`blogn is listening on port ${port}...`));
