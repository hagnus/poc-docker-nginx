import * as Product from '../models/Product';
import { RestCall } from '../types/api';

export const create: RestCall = (request, response, next) => {
  Product.create(request.body)
      .then((data) => response.status(200).json({
        id: data[0],
      }))
      .catch((error) => next(error));
}

export const getAll: RestCall = (request, response, next) => {
  Product.getAll()
      .then((data) => response.status(200).json(data))
      .catch((error) => next(error));
}

export const findById: RestCall = (request, response, next) => {
  Product.findById(request.params.id)
      .then((data) => response.status(200).json(data))
      .catch((error) => next(error));
}

export const update: RestCall = (request, response, next) => {
  Product.update(request.params.id, request.body)
      .then((affectedRows) => response.status(200).json({
        affectedRows,
        message: 'Product(s) updated!',
      }))
      .catch((error) => next(error));
}

export const remove: RestCall = (request, response, next) => {
  Product.remove(request.params.id)
      .then((affectedRows) => response.status(200).json({
        affectedRows,
        message: 'Product(s) deleted!',
      }))
      .catch((error) => next(error));
}
