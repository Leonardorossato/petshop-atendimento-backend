const mongoose = require('mongoose')

const produtosSchema = new mongoose.Schema({
    nome: {type: String,required: true, nullable: false, min: 3, max: 100},
    preco:{type: Number, nullable: false, required: true},
    estoque:{type: Number,nullable: false, required: true, default: 0}
})

const Produtos = mongoose.model('produtos', produtosSchema)

module.exports = Produtos