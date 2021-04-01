import database from '../database/connection';
import {Product, PostProduct} from '../utils/types';

const exposedFields = ['id', 'title', 'description', 'active'];

export function create(product: PostProduct): Promise<Product[]> {
  return database<Product>('products')
      .returning(exposedFields)
      .insert(product);
}

export function findById(uuid: string): Promise<Product[]> {
  return database<string, Product[]>('products')
      .where('id', uuid);
}

export function findBy(field: string, value: any): Promise<Product[]> {
  return database<never, Product[]>('products')
      .where(field, value);
}

export function getAll(): Promise<Product[]> {
  return database.select().from('products');
}

export function update(uuid: string, product: Product): Promise<Product[]> {
  product.update_at = database.fn.now();

  return database('products')
      .where({id: uuid})
      .returning(exposedFields)
      .update(product);
}

export function remove(uuid: string): Promise<Product[]> { 
  return database('products')
      .where('id', uuid)
      .returning(exposedFields)
      .del();
}
