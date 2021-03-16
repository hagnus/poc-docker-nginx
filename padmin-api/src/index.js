const express = require('express');
const sql = require("./db.js");

const PORT = 9001;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req, res) => {
    res.send('Welcome to API');
});

app.get('/check', (req, res) => {
  res.send("SUCESS!!!");
});

app.get('/products', (req, res) => {
  sql.query('SELECT * FROM products', function (error, results) {

    if (error) { 
      throw error
    };

    res.send(results);
  });
});

app.listen(PORT, HOST, () => {
  console.log('Listening on port 9001');
})