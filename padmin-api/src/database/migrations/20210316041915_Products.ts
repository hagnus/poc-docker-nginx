import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .raw('create extension if not exists "uuid-ossp"')
    .createTable('products', function (table) {
        table.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('title').notNullable();
        table.string('description');
        table.timestamp('update_at').nullable();
        table.timestamp('published_at').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.boolean('active').defaultTo(false);
    }).createTable('tags', function (table) {
        table.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('name').notNullable();
    }).createTable('products_tags', function (table) {
        table.primary(['product', 'tag']);
        table.uuid('product').unsigned().references('id').inTable('products');
        table.uuid('tag').unsigned().references('id').inTable('tags');
    }).createTable('variants', function (table) {
        table.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
        table.uuid('product').unsigned().references('id').inTable('products');
        table.string('title').notNullable();
        table.string('barcode').nullable();
        table.decimal('price').notNullable();
        table.string('currency_code').defaultTo('CAD').notNullable();
        table.decimal('weight').notNullable();
        table.string('weight_unit').defaultTo('grams').notNullable();
        table.decimal('size').nullable();
        table.boolean('taxable').defaultTo(true);
        table.integer('image_id').nullable();
        table.integer('invetory_id').nullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("variants")
        .dropTable("products_tags")
        .dropTable("products")
        .dropTable("tags")
        .raw('drop extension if exists "uuid-ossp"')
}
