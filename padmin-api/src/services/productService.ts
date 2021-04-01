import * as ProductData from '../data/productData';
import { Product, PostProduct } from '../utils/types';
import { InvalidUuidError, NotFoundError, RequiredInformationError, DuplicatedError } from '../utils/errors';
import Validator from 'validator';

export async function create(product: PostProduct): Promise<Product[]> {
    if (!product.title) throw RequiredInformationError('title');
    if (!product.description) throw RequiredInformationError('description');

    const products = await ProductData.findBy('title', product.title);
    
    if (products.length > 0) {
        throw DuplicatedError(`Product (${product.title})`);
    }

    return ProductData.create(product);
}

export function getAll(): Promise<Product[]> {
    return ProductData.getAll();
}

export async function findById(id: string): Promise<Product[]> {
    if (!Validator.isUUID(id)) {
        throw InvalidUuidError(id);
    }

    const products = await ProductData.findById(id);

    if (products.length === 0) {
        throw NotFoundError('Product');
    }

    return products;
}

export async function update(id: string, product: Product): Promise<Product[]> {
    await findById(id);
    return ProductData.update(id, product);
}

export async function remove(id: string): Promise<Product[]> {
    await findById(id);
    return ProductData.remove(id);
}
