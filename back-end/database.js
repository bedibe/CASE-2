const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize('test-db', 'item', 'pass',{
   dialect: 'sqlite',
   host: '.dev.sqlite'
})

module.exports = sequelize;