import {Router} from 'express';
import * as ProductService from '../services/productService';

const productRoutes = Router();

productRoutes.post('/', async (request, response) => {
    const products = await ProductService.create(request.body);

    response.status(200).json(products);
});

productRoutes.get('/', async (resquest, response) => {
    const products = await ProductService.getAll();

    response.json(products);
});

productRoutes.get('/:id', async (request, response) => {
    const product = await ProductService.findById(request.params.id);

    response.status(200).json(product);
});

productRoutes.delete('/:id', async (request, response) => {
    const deletedProducts = await ProductService.remove(request.params.id);

    response.status(200).json(deletedProducts);
});

productRoutes.put('/:id', async (request, response) => {
    const updatedProducts = await ProductService.update(request.params.id, request.body);

    response.status(200).json(updatedProducts);
});

export default productRoutes;
