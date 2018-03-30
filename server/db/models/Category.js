const Sequelize = require('sequelize');
const conn = require('../conn');

const Category = conn.define('category', {
  name: Sequelize.STRING,
});

module.exports = Category;