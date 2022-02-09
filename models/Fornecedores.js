const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/db')

class Fornecedores extends Model {}

Fornecedores.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    empresa:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    catergoria:{
        type: DataTypes.ENUM('ração', 'brinquedos'),
        allowNull: false
    }

},{
    sequelize,
    modelName: 'fornecedores',
    timestamps: false
})

module.exports = Fornecedores