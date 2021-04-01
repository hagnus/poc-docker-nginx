import * as ProductData from '../data/productData';
import { Product, PostProduct } from '../utils/types';
import { NotFoundError } from '../utils/errors';

export function create (product: PostProduct): Promise<Product[]> {
    return ProductData.create(product);
}

export function getAll(): Promise<Product[]> {
    return ProductData.getAll();
}

export async function findById(id: string): Promise<Product[]> {   
    const products = await ProductData.findById(id);

    if (products.length === 0) {
        throw NotFoundError('Product');
    }

    return products;
}

export function update(id: string, product: Product): Promise<Product[]> {
    return ProductData.update(id, product);
}

export function remove(id: string): Promise<Product[]> {
    return ProductData.remove(id);
}
