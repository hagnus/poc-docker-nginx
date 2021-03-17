const Product = require("../models/Product");

exports.create = (request, response, next) => {
    Product.create(request.body)
        .then(data => response.status(200).json({
            id: data[0],
        }))
        .catch((error) => next(error));
};

exports.getAll = (request, response, next) => {
    Product.getAll()
        .then(data => response.status(200).json(data))
        .catch((error) => next(error));
};

exports.findById = (request, response, next) => {
    Product.findById(request.params.id)
        .then(data => response.status(200).json(data))
        .catch((error) => next(error));
};

exports.update = (request, response, next) => {
    Product.update(request.params.id, request.body)
        .then((affectedRows) => response.status(200).json({
            affectedRows,
            message: 'Product(s) updated!'
        }))
        .catch((error) => next(error));
};

exports.delete = (request, response, next) => {
    Product.delete(request.params.id)
        .then((affectedRows) => response.status(200).json({
            affectedRows,
            message: 'Product(s) deleted!'
        }))
        .catch((error) => next(error));
};

exports.deleteAll = (request, response, next) => {
  
};