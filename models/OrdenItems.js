const Sequelize = require('sequelize')
const db = require('../config/config')
const Productos = require('./Productos')
const Orden = require('./Orden')
const OrdenItems = db.define('ordenitems',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING,
    },
    precio: {
        type: Sequelize.DECIMAL(10,2)
    },
    cantidad:{
        type: Sequelize.DECIMAL(10,2)
    }
}, {timestamps: false});

OrdenItems.belongsTo(Orden,{
    as: "orden"
})
OrdenItems.belongsTo(Productos,{
    as:"producto"
})

module.exports = OrdenItems

