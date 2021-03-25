import knex from 'knex';
import config from './knexfile';

const envConnection = config[process.env.NODE_ENV || 'development'];

export default knex(envConnection);