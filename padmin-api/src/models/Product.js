const database = require("../db");

const Product = function(product) {
    this.title = product.title;
    this.description = product.description;
    this.published_at = product.published_at;
    this.active = product.active;
};

Product.create = (product) => {
    return database('products')
        .insert(product);
};

Product.findById = (productId) => {
    return database('products')
        .where('id', productId);
};

Product.getAll = () => {
    return database.select().from('products').limit(50);
};
 
Product.update = (productId, product) => {
    product.update_at = database.fn.now();

    return database('products')
        .where({ id: productId })
        .update(product);
};

Product.delete = (productId) => {
    return database('products')
        .where('id', productId)
        .del();
};

module.exports = Product;