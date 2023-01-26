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

Orden.associate = (models) => {
    Orden.Clientes = Orden.belongsTo(models.lientes, {
      as: "user",
      foreignKey: "clienteId",
    });
    Orden.OrdenItems = Orden.hasMany(models.OrdenItems, {
      as: "orderItems",
    });
  };

module.exports = Orden