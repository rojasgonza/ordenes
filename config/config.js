const  Sequelize = require("sequelize");

const db = new Sequelize('database','root','',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})
module.exports = db