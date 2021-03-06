import crypto from 'crypto';
import {PostProduct} from '../utils/types';
import * as ProductsService from '../services/productService';

import { request } from "./helpers";

const genericUiid = '7bc2069c-1da3-4981-9bef-ca23f3392cf2';
const generate = function (): PostProduct {
	return {
		title: crypto.randomBytes(20).toString('hex'),
		description: crypto.randomBytes(20).toString('hex'),
		active: false,
	}
};

describe('environmental variables', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	test('Should get products', async function () {
		const product1 = await ProductsService.create(generate());
		const product2 = await ProductsService.create(generate());

		const response = await request('products', 'get');
		const products = response.data;

		expect(response.status).toBe(200);
		expect(products).toHaveLength(2);

		await ProductsService.remove(product1[0].id);
		await ProductsService.remove(product2[0].id);
	});

	test('Should save a product', async function () {
		const productToSave = generate();
		
		const response = await request('products', 'post', productToSave);
		const product = response.data[0];

		expect(response.status).toBe(201);
		expect(product.title).toBe(productToSave.title);
		expect(product.description).toBe(productToSave.description);
		
		await ProductsService.remove(product.id);
	});

	test('Should get 409 saving an existent product', async function () {
		const existentProducts = await ProductsService.create(generate());
		const response = await request('products', 'post', existentProducts[0]);

		expect(response.status).toBe(409);
		expect(response.data).toBe(`Product (${existentProducts[0].title}) already exists`);
		await ProductsService.remove(existentProducts[0].id);
	});

	test('Should get 400 saving a product', async function () {
		const response = await request('products', 'post', {});

		expect(response.status).toBe(400);
		expect(response.data).toBe("'title' is required in this process");
	});		

	test('Should update a product', async function () {
		const product = await ProductsService.create(generate());
		product[0].title = 'changed title';
		product[0].description = 'changed description';

		const response = await request(`products/${product[0].id}`, 'put', product[0]);
		const updatedProduct = response.data[0];

		expect(response.status).toBe(200);
		expect(updatedProduct.title).toBe(product[0].title);
		expect(updatedProduct.description).toBe(product[0].description);
		await ProductsService.remove(product[0].id);
	});

	test('Should get 400 to update a product with invalid id', async function () {	
		const product = await ProductsService.create(generate());
		product[0].title = '400 title';
		product[0].description = '400 description';
		const response = await request(`products/not-uuid`, 'put', product[0]);

		expect(response.status).toBe(400);
		expect(response.data).toBe("'not-uuid' is not a valid uuid");
		await ProductsService.remove(product[0].id);
	});

	test('Should delete a product', async function () {
		const newProduct = await ProductsService.create(generate());	
		const response = await request(`products/${newProduct[0].id}`, 'delete');	
		const products = await ProductsService.getAll();
		
		expect(response.status).toBe(200);
		expect(products).toHaveLength(0);
	});

	test('Should get 400 to delete a product with invalid id', async function () {	
		const response = await request(`products/123`, 'delete');

		expect(response.status).toBe(400);
		expect(response.data).toBe("'123' is not a valid uuid");
	});

	test('Should get a product by id', async function () {
		const newProduct = await ProductsService.create(generate());
		
		const response = await request(`products/${newProduct[0].id}`, 'get');
		const product = response.data[0];

		expect(response.status).toBe(200);
		expect(product.id).toBe(newProduct[0].id);

		await ProductsService.remove(product.id);
	});

	test('Should get 404 to get an inexistent product', async function () {	
		const response = await request(`products/${genericUiid}`, 'get');

		expect(response.status).toBe(404);
		expect(response.data).toBe("Product not found");
	});

	test('Should get 400 to get product with invalid id', async function () {	
		const response = await request(`products/invalid-id`, 'get');

		expect(response.status).toBe(400);
		expect(response.data).toBe("'invalid-id' is not a valid uuid");
	});
});
