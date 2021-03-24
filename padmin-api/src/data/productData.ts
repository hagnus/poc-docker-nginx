import database from '../database/connection';
import {Product} from '../utils/types';


export function create(product: Product): Promise<number[]> {
  return database('products')
      .insert(product);
}

export function findById(productId: string): Promise<Product> {
  return database<number, Product>('products')
      .where('id', productId);
}

export function getAll(): Promise<Product[]> {
  return database.select().from('products').limit(50);
}

export function update(productId: string, product: Product): Promise<number> {
  product.update_at = database.fn.now();

  return database('products')
      .where({id: productId})
      .update(product);
}

export function remove(productId: string): Promise<number> {
  return database('products')
      .where('id', productId)
      .del();
}
