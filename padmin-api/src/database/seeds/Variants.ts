
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  return knex('variants').del()
    .then(function () {
      // Inserts seed entries
      return knex('variants').insert([
        {product: 1, weight: 100, price: 19.99, title: 'Red Variant' },
        {product: 1, weight: 100, price: 29.99, title: 'Green Variant' },
        {product: 2, weight: 50, price: 5.99, title: 'Single Variant' },
        {product: 3, weight: 150, price: 7.99, title: 'Big' },
        {product: 3, weight: 160, price: 23.99, title: 'Medium' },
        {product: 3, weight: 180, price: 38.79, title: 'Small ' }
      ]);
    });
}
