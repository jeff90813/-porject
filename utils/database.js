const mysql = require('mysql2');

// create database connection
const pool = mysql.createPool({ 
   host:'us-cdbr-east-04.cleardb.com', 
    user: 'b618d314204b45', 
    password: '1b73004c',
    database: 'heroku_87ea95d952d2406'
  })

module.exports = pool.promise();
