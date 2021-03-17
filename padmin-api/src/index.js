const express = require('express');
const products = require("./controllers/ProductController");

const PORT = 9001;
const HOST = '0.0.0.0';
console.log(process.env.API_PORT);

const app = express();
app.use(express.json())  

app.get('/',(request, response) => {
    response.send('Welcome to API');
});

app.get('/check', (request, response) => {
  response.send("SUCESS!!!");
});

app.get('/products', products.getAll);
app.post('/products', products.create);
app.get('/products/:id', products.findById);
app.delete('/products/:id', products.delete);
app.put('/products/:id', products.update);

app.listen(PORT, HOST, () => {
  console.log('Listening on port 9001');
})