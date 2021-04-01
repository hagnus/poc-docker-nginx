import * as ProductData from '../data/productData';
import { Product, PostProduct } from '../utils/types';
import { InvalidUuidError, NotFoundError } from '../utils/errors';
import { UUID_REGEX } from '../utils/const';

export function create (product: PostProduct): Promise<Product[]> {
    return ProductData.create(product);
}

export function getAll(): Promise<Product[]> {
    return ProductData.getAll();
}

export async function findById(id: string): Promise<Product[]> {
    if (!id.match(UUID_REGEX)) {
        throw InvalidUuidError(id);
    }

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
