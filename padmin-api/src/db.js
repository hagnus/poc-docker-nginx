const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'padmin-db',
  database: 'padmin',
  port: '3306',
  user: 'root',
  password: 'p@dmin'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;