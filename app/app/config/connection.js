// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWS_URL);
} else {
  connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'meatbal1l',
    database: 'burgers_db'
  })
}

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("burgers_db", "root", "meatbal1l", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


// Exports the connection for other files to use
module.exports = sequelize;
