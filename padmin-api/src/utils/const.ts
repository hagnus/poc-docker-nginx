import dotenv from 'dotenv';

const ENVIRONMENT = process.env.NODE_ENV ? process.env.NODE_ENV : '';
dotenv.config({path: `${__dirname}/../../../${ENVIRONMENT}.env`});
// console.log('CONST', result.parsed);

export const DB_PORT = process.env.DB_PORT;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_USER = process.env.DB_USER;
export const DB_HOST = process.env.DB_HOST || 'localhost';

export const API_PORT = process.env.API_PORT;

export const UUID_REGEX = "[0-9a-f]{8}-[0-9a-f]{4}-4[0-9]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";