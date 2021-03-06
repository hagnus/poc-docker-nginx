import dotenv from 'dotenv';
import { Knex } from 'knex';

const ENVIRONMENT = process.env.NODE_ENV ? process.env.NODE_ENV : '';
dotenv.config({path: `${__dirname}/../../../${ENVIRONMENT}.env`});
// console.log('KNEX', result.parsed);
interface KnexConfig {
  [key: string]: Knex.Config;
}

const connection = {
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT as string),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}

const knexConfig: KnexConfig = {
  development: {
    client: 'pg',
    connection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  test: {
    client: 'pg',
    connection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  staging: {

  },

  production: {

  }
};

export default knexConfig;