import * as User from '../models/user';
import { RestCall } from '../types/api';

export const create: RestCall = (request, response, next) => {
  User.create(request.body)
      .then((data) => response.status(200).json({
        id: data[0],
      }))
      .catch((error) => next(error));
}

export const getAll: RestCall = (request, response, next) => {
  User.getAll()
      .then((data) => response.status(200).json(data))
      .catch((error) => next(error));
}

export const findById: RestCall = (request, response, next) => {
  User.findById(request.params.id)
      .then((data) => response.status(200).json(data))
      .catch((error) => next(error));
}

export const update: RestCall = (request, response, next) => {
  User.update(request.params.id, request.body)
      .then((affectedRows) => response.status(200).json({
        affectedRows,
        message: 'User(s) updated!',
      }))
      .catch((error) => next(error));
}

export const remove: RestCall = (request, response, next) => {
  User.remove(request.params.id)
      .then((affectedRows) => response.status(200).json({
        affectedRows,
        message: 'User(s) deleted!',
      }))
      .catch((error) => next(error));
}