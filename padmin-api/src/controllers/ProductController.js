import * as Product from '../models/Product.js';

export function create(request, response, next) {
  Product.create(request.body)
      .then((data) => response.status(200).json({
        id: data[0],
      }))
      .catch((error) => next(error));
};

export function getAll(request, response, next) {
  Product.getAll()
      .then((data) => response.status(200).json(data))
      .catch((error) => next(error));
};

export function findById(request, response, next) {
  Product.findById(request.params.id)
      .then((data) => response.status(200).json(data))
      .catch((error) => next(error));
};

export function update(request, response, next) {
  Product.update(request.params.id, request.body)
      .then((affectedRows) => response.status(200).json({
        affectedRows,
        message: 'Product(s) updated!',
      }))
      .catch((error) => next(error));
};

export function remove(request, response, next) {
  Product.remove(request.params.id)
      .then((affectedRows) => response.status(200).json({
        affectedRows,
        message: 'Product(s) deleted!',
      }))
      .catch((error) => next(error));
};
