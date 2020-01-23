const util = require("util");
const mysql = require("mysql"); 
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;