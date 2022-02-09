const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/db')

class Atendimento extends Model {}

Atendimento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pet:{
        type: DataTypes.STRING
    },
    servico:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false,
        datetime: true
    },  
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    observacoes:{
        type: DataTypes.TEXT
    }
},{
    sequelize,
    modelName: 'atendimentos',
    timestamps: false
})

module.exports = Atendimento