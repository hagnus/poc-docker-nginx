import * as ProductData from '../data/productData';
import { Product } from '../utils/types';

export function create (product: Product): Promise<number[]> {
  return ProductData.create(product);
}

export function getAll(): Promise<Product[]> {
  return ProductData.getAll();
}

export function findById(id: string): Promise<Product> {
  return ProductData.findById(id);
}

export function update(id: string, product: Product): Promise<number> {
  return ProductData.update(id, product);
}

export function remove(id: string): Promise<number> {
  return ProductData.remove(id);
}
