const express = require('express');
const routes = require('./routes');

const PORT = process.env.API_PORT || 9001;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/',(request, response) => {
  response.send('Welcome to API');
});

app.get('/check', (request, response) => {
  response.send("Connected");
});

app.use('/', routes);

app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`);
})