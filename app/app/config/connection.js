// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("burgers_db", "root", "meatbal1l", {
  host: "a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


// Exports the connection for other files to use
module.exports = sequelize;
