//npm install --save mysql2 // docs from npmjs show how to set up the connection
//var mysql = require('mysql2');
var mysql = require('mysql2');

//create a to db connection and export it for files to use
const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});

module.exports = database;