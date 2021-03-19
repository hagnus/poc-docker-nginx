import configuration from '../knexfile.js';
import knex from 'knex';

export default knex(configuration[process.env.NODE_ENV || 'development']);
