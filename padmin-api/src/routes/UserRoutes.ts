import {Router} from 'express';
import * as UserService from '../services/userService';

const userRoutes = Router();

userRoutes.post('/', async (request, response) => {
    const generatedId = await UserService.create(request.body);

    response.status(200).json({
        id: generatedId[0],
    });
});

userRoutes.get('/', async (resquest, response) => {
    const users = await UserService.getAll();

    response.json(users);
});

userRoutes.get('/:id', async (request, response) => {
    const user = await UserService.findById(request.params.id);

    response.status(200).json(user);
});

userRoutes.delete('/:id', async (request, response) => {
    const affectedRows = await UserService.remove(request.params.id);

    response.status(200).json({
        affectedRows,
        message: 'User(s) deleted!',
    })
});

userRoutes.put('/:id', async (request, response) => {
    const affectedRows = await UserService.update(request.params.id, request.body);

    response.status(200).json({
        affectedRows,
        message: 'User(s) updated!',
    })
});

export default userRoutes;
