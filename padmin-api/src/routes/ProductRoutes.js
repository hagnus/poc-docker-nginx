import {Router} from 'express';
import * as ProductController from '../controllers/ProductController.js';

const productRoutes = new Router();

productRoutes.get('/', ProductController.getAll);
productRoutes.post('/', ProductController.create);
productRoutes.get('/:id', ProductController.findById);
productRoutes.delete('/:id', ProductController.remove);
productRoutes.put('/:id', ProductController.update);

export default productRoutes;
