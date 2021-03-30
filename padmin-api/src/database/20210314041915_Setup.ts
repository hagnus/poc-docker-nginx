import { Knex } from "knex";
import database from '../connection';

console.log('SETUP', process.env.NODE_ENV);
export async function up(knex: Knex): Promise<void> {   
    console.log('SETUP 2', knex.client.config);
    if (knex.client.config.databse === process.env.DB_NAME_TEST) {
        console.log('SKIPED');
        return null;
    }
    
    return database.raw('CREATE DATABASE "' + process.env.DB_NAME_TEST + '"');
}


export async function down(knex: Knex): Promise<void> {
    if (knex.client.config.databse === process.env.DB_NAME_TEST) {
        return null;
    }

    return database.raw('DROP DATABASE "' + process.env.DB_NAME_TEST + '"');
}

