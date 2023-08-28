// src/database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('Cadastro-de-usuarios', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
