// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'padmin-db',
      database : 'padmin',
      port: process.env.DB_PORT || 3306,
      user : process.env.DB_USER || 'root',
      password : process.env.DB_PASSWORD || 'root',
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
