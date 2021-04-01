import {Router} from 'express';
import * as ProductService from '../services/productService';

const productRoutes = Router();

productRoutes.post('/', async (request, response, next) => {
    const products = await ProductService.create(request.body);

    response.status(201).json(products);
});

productRoutes.get('/', async (resquest, response, next) => {
    const result = await ProductService.getAll();
    response.status(200).json(result);
});

productRoutes.get('/:id', async (request, response, next) => {
    try {
        const result = await ProductService.findById(request.params.id);        
        response.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

productRoutes.delete('/:id', async (request, response, next) => {
    const deletedProducts = await ProductService.remove(request.params.id);

    response.status(200).json(deletedProducts);
});

productRoutes.put('/:id', async (request, response, next) => {
    const updatedProducts = await ProductService.update(request.params.id, request.body);

    response.status(200).json(updatedProducts);
});

export default productRoutes;
