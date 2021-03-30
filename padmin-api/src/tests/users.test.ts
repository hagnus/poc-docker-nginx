import crypto from 'crypto';
import {PostUser, User} from '../utils/types';
import * as UsersService from '../services/userService';
import { request } from "./helpers";

const generateUser = function (): PostUser {
	return {
		name: crypto.randomBytes(20).toString('hex'),
		email: crypto.randomBytes(20).toString('hex'),
		active: false,
	}
};

describe('environmental variables', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	test('Should get users', async function () {
		const user1 = await UsersService.create(generateUser());
		const user2 = await UsersService.create(generateUser());

		const response = await request('users', 'get');
		const users = response.data;

		expect(users).toHaveLength(2);

		await UsersService.remove(user1[0].id);
		await UsersService.remove(user2[0].id);
	});

	test('Should save a user', async function () {
		const userToSave = generateUser();
		
		const response = await request('users', 'post', userToSave);
		const user = response.data[0];

		expect(user.name).toBe(userToSave.name);
		expect(user.email).toBe(userToSave.email);
		
		await UsersService.remove(user.id);
	});

	test('Should update a user', async function () {
		const user = await UsersService.create(generateUser());
		user[0].name = 'changed name';
		user[0].email = 'changed email';

		const response = await request(`users/${user[0].id}`, 'put', user[0]);
		const updatedUser = response.data[0];

		expect(updatedUser.name).toBe(user[0].name);
		expect(updatedUser.email).toBe(user[0].email);
		await UsersService.remove(user[0].id);
	});

	test('Should delete a user', async function () {
		const user = await UsersService.create(generateUser());
		
		await request(`users/${user[0].id}`, 'delete');
		
		const users = await UsersService.getAll();
		expect(users).toHaveLength(0);
	});
});
