import crypto from 'crypto';
import {PostProduct} from '../utils/types';
import * as ProductsService from '../services/productService';

import { request } from "./helpers";

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

		expect(products).toHaveLength(2);

		await ProductsService.remove(product1[0].id);
		await ProductsService.remove(product2[0].id);
	});

	test('Should save a product', async function () {
		const productToSave = generate();
		
		const response = await request('products', 'post', productToSave);
		const product = response.data[0];

		expect(product.title).toBe(productToSave.title);
		expect(product.description).toBe(productToSave.description);
		
		await ProductsService.remove(product.id);
	});

	test('Should update a product', async function () {
		const product = await ProductsService.create(generate());
		product[0].title = 'changed title';
		product[0].description = 'changed description';

		const response = await request(`products/${product[0].id}`, 'put', product[0]);
		const updatedProduct = response.data[0];

		expect(updatedProduct.title).toBe(product[0].title);
		expect(updatedProduct.description).toBe(product[0].description);
		await ProductsService.remove(product[0].id);
	});

	test('Should delete a product', async function () {
		const product = await ProductsService.create(generate());
		
		await request(`products/${product[0].id}`, 'delete');
		
		const products = await ProductsService.getAll();
		expect(products).toHaveLength(0);
	});
});
