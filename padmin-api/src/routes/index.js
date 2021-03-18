const routes = require('express').Router();
const productRoutes = require('./ProductRoutes');

routes.get('/',(request, response) => {
    response.send('Welcome to API');
});

routes.get('/check', (request, response) => {
    response.send("Connected");
});

routes.use('/products', productRoutes);

module.exports = routes;