const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('petshop-atendimento-db','atendimento', 'pass',{
    dialect: 'sqlite',
    host: './dev.sqlite'
})


module.exports = sequelize