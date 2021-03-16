const express = require('express');
const db = require("./db.js");

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
  console.log("ENTRANDO....");

  db.select().from('products')
  .returning()
  .then(data => res.send(data))
  .catch((error) => {
    console.warn(error);
  });

  // res.send("SUCESS!!!");
});

app.listen(PORT, HOST, () => {
  console.log('Listening on port 9001');
})