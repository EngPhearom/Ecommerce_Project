const mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_HPASSWORD,
    database: process.env.DB_DATABSE
});

module.exports = con;