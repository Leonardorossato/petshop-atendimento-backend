const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('petshop-atendimento-db','fornecedores', 'pass',{
    dialect: 'sqlite',
    host: './dev.sqlite'
})


module.exports = sequelize