const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql2023',
  database: 'testdb'
});


module.exports = connection;

