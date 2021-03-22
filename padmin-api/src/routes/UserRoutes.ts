import {Router} from 'express';
import * as UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.get('/', UserController.getAll);
userRoutes.post('/', UserController.create);
userRoutes.get('/:id', UserController.findById);
userRoutes.delete('/:id', UserController.remove);
userRoutes.put('/:id', UserController.update);

export default userRoutes;
