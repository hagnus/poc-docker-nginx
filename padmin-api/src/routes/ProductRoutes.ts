import {NextFunction, Request, Response, Router} from 'express';
import * as ProductService from '../services/productService';

const productRoutes = Router();

productRoutes.post('/', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await ProductService.create(request.body);
        response.status(201).json(products);
    } catch (error) {
        next(error);
    }
});

productRoutes.get('/', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await ProductService.getAll();
        response.status(200).json(products);
    } catch (error) {
        next(error);
    }
});

productRoutes.get('/:id', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await ProductService.findById(request.params.id);
        response.status(200).json(products);
    } catch (error) {
        next(error);
    }
});

productRoutes.delete('/:id', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const deletedProducts = await ProductService.remove(request.params.id);
        response.status(200).json(deletedProducts);
    } catch (error) {
        next(error);
    }
});

productRoutes.put('/:id', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const updatedProducts = await ProductService.update(request.params.id, request.body);
        response.status(200).json(updatedProducts);
    } catch (error) {
        console.log('UPDATE EXCEPTION', error);
        next(error);
    }
});

export default productRoutes;
