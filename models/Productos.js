const Sequelize = require('sequelize')
const db = require('../config/config')

const Productos = db.define('productos',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.DECIMAL(10,2)
    }
}, {timestamps: false});

module.exports = Productos;