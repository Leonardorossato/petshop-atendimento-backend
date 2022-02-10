const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    nome: {type: String,required: true, nullable: false, min: 3, max: 100},
    email:{type: String, nullable: false, required: true, unique: true, min: 5, max: 200},
    endereco:{type: String,nullable: false, required: true},
    telefone:{type: String, nullable: false, required: true},
})

const Cliente = mongoose.model('cliente', clienteSchema)

module.exports = Cliente