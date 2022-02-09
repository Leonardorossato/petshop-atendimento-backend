const mongoose = require('mongoose')

const forncedoresSchema = new mongoose.Schema({
    nome: {type: String,required: true, nullable: false, min: 3, max: 100},
    empresa:{type: String, nullable: false, required: true},
    email:{type: String,nullable: false, required: true, min: 6, max: 200},
    categoria:{type: String, enum: ["ração", "brinquedos"], nullable: false, required: true},
})

const Fornecedores = mongoose.model('fornecedores', forncedoresSchema)

module.exports = Fornecedores