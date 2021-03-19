import database from '../db.js';

// TODO: Replace by type definition
// const Product = function(product) {
//     this.title = product.title;
//     this.description = product.description;
//     this.published_at = product.published_at;
//     this.active = product.active;
// };

export function create(product) {
  return database('products')
      .insert(product);
};

export function findById(productId) {
  return database('products')
      .where('id', productId);
};

export function getAll() {
  return database.select().from('products').limit(50);
};

export function update(productId, product) {
  product.update_at = database.fn.now();

  return database('products')
      .where({id: productId})
      .update(product);
};

export function remove(productId) {
  return database('products')
      .where('id', productId)
      .del();
};
