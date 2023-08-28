const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME || 'node_postgres',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || '111111',
  {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
  },
);
