// Update with your config settings.
const { config } = require("dotenv");
config();

const commonConfig = {
  client: "pg",
  connection: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./db-migrations",
    extension: "ts",
  },
};

module.exports = {
  development: commonConfig,
  staging: commonConfig,
  production: commonConfig,
};
