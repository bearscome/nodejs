const mysql = require("mysql");
require("dotenv").config();

const env = process.env;

const db = mysql.createConnection({
  host: env.host,
  user: env.user,
  password: env.password,
  database: env.database,
});

db.connect();

module.exports = db;
