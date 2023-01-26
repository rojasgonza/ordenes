const Sequelize = require('sequelize')
const db = require('../config/config')
const OrdenItems = require('./OrdenItems')
const Clientes = require('./Cliente')
const Orden = db.define('orden', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total:{
        type: Sequelize.DECIMAL(10,2)
    }
});

Orden.belongsTo(Clientes,{
    as: "cliente",
    foreignKey: "userId"
})
Orden.hasMany(OrdenItems, {
    as: "ordernItems"
})


module.exports = Orden