const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 9001;
const HOST = '0.0.0.0';

const connection = mysql.createConnection({
  host: 'padmin-db',
  database: 'padmin',
  port: '3306',
  user: 'root',
  password: 'p@dmin'
});

connection.connect();

app.get('/',(req, res) => {
    res.send('Welcome to API');
});

app.get('/check', (req, res) => {
  res.send("SUCESS!!!");
});

app.get('/products', (req, res) => {
  connection.query('SELECT * FROM products', function (error, results) {

    if (error) { 
      throw error
    };

    res.send(results.map(item => ({ name: item.name, price: item.price })));
  });

  connection.end();
});


app.listen(PORT, HOST, () => {
  console.log('Listening on port 9001');
})