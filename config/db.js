
//Creating a database name for the MongoDB 
const mongooseBaseName = 'blogn';


//Create the MongoDB URI for Development and Test 
const database = {
    development: `mongodb://localhost:27017/${mongooseBaseName}-developent` ,
    test: `mongodb:localhost:27017/${mongooseBaseName}-test`
};


//Identify if develoopment environment is Test or Dev
//Select a Database based on whether a test file was executed before 'server.js'
const localDB = process.env.TESTENV ? database.test : database.development;

// Environment variable MONGODB_URI will be available in Heroku Production Environment.
//Otherwise use Test or Development Database.

const currentDB = process.env.MONGODB_URI || localDB;


//Export the appropriate database based on the current environment
module.exports = currentDB;
