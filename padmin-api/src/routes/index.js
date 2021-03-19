import {Router} from 'express';
import productRoutes from './ProductRoutes.js';

const routes = new Router();

routes.get('/', (request, response) => {
  response.send('Welcome to API');
});

routes.get('/check', (request, response) => {
  response.send('Connected');
});

routes.use('/products', productRoutes);

export default routes;
