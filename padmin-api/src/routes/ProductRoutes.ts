import {Router} from 'express';
import * as ProductService from '../services/productService';

const productRoutes = Router();

productRoutes.post('/', async (request, response) => {
    const generatedId = await ProductService.create(request.body);

    response.status(200).json({
        id: generatedId[0],
    });
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
    const affectedRows = await ProductService.remove(request.params.id);

    response.status(200).json({
        affectedRows,
        message: 'Product(s) deleted!',
    })
});

productRoutes.put('/:id', async (request, response) => {
    const affectedRows = await ProductService.update(request.params.id, request.body);

    response.status(200).json({
        affectedRows,
        message: 'Product(s) updated!',
    })
});

export default productRoutes;
