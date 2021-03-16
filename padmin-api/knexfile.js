// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      port: '3402',
      database : 'padmin',
      user : 'root',
      password : 'p@dmin',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
  },

  production: {

  }
};
