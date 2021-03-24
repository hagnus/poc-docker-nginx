import {Router} from 'express';
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.get('/', (request, response) => {
  response.send('Welcome to API');
});

routes.get('/check', (request, response) => {
  response.send('Connected');
});

routes.use('/products', productRoutes);
routes.use('/users', userRoutes);

export default routes;
