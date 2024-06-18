const mysql = require("mysql2");

const dbpool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: "",
  database: process.env.DATABASE,
});

module.exports = dbpool.promise();
