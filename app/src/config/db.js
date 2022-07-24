const mysql = require("mysql");
const env = process.env;

const db = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
});

db.connect();

module.exports = db;
