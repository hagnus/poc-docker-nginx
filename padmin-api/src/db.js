// const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
// const knex = require('knex')(connection)

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'padmin-db',
      database : 'padmin',
      user : 'root',
      password : 'p@dmin',
    },
    useNullAsDefault: true
});

module.exports = knex;