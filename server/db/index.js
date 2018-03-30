const Category = require('./models/Category');
const Product = require('./models/Product');
const conn = require('./conn');
const faker = require('faker');

const syncAndSeed = () => {
  conn.sync({ force: true })
    .then(() => {
      return Promise.all([
        Category.create({name: `${faker.commerce.productAdjective()} ${faker.commerce.department()}`}),
        Category.create({name: `${faker.commerce.productAdjective()} ${faker.commerce.department()}`}),
        Category.create({name: `${faker.commerce.productAdjective()} ${faker.commerce.department()}`}),
        Product.create({name: faker.commerce.productName()})
          .then(product => product.setCategory(1)),
        Product.create({name: faker.commerce.productName()})
          .then(product => product.setCategory(2)),
        Product.create({name: faker.commerce.productName()})
          .then(product => product.setCategory(2)),
        Product.create({name: faker.commerce.productName()})
          .then(product => product.setCategory(3)),
      ])
    })
};

Product.belongsTo(Category, { onDelete: 'cascade', hooks: true });
Category.belongsToMany(Product, {through: 'categoryId'});
Category.hasMany(Product);


module.exports = {
  models: {
    Category,
    Product
  },
  syncAndSeed
};