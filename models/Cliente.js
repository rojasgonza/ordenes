const Sequelize = require('sequelize')
const db = require('../config/config')
const Orden = require('./Orden')
const Clientes = db.define('clientes',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        trim: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    direccion: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }

    },{timestamps: false})
    Clientes.hasMany(Orden,{
        onDelete: 'cascade',
        onUpdate: 'cascade'
    })
    module.exports = Clientes