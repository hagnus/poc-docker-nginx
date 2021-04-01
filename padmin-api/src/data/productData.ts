import database from '../database/connection';
import {Product, PostProduct} from '../utils/types';

const exposedFields = ['id', 'title', 'description', 'active'];

export function create(product: PostProduct): Promise<Product[]> {
  return database<Product>('products')
      .returning(exposedFields)
      .insert(product);
}

export function findById(productId: string): Promise<Product[]> {
  return database<string, Product[]>('products')
      .where('id', productId);
}

export function getAll(): Promise<Product[]> {
  return database.select().from('products');
}

export function update(productId: string, product: Product): Promise<Product[]> {
  product.update_at = database.fn.now();

  return database('products')
      .where({id: productId})
      .returning(exposedFields)
      .update(product);
}

export function remove(productId: string): Promise<Product[]> {
  return database('products')
      .where('id', productId)
      .returning(exposedFields)
      .del();
}
