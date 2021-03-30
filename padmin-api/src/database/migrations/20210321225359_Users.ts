import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (table) {
        table.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('name');
        table.string('password');
        table.string('email');
        table.timestamp('update_at').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.boolean('active').defaultTo(false);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

