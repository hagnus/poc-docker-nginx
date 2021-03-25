import dotenv from 'dotenv';

const result = dotenv.config({path: __dirname+'/../../../.env'});
console.log(result.parsed);

export const DB_PORT = process.env.DB_PORT;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_USER = process.env.DB_USER;

export const API_PORT = process.env.API_PORT;