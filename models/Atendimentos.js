const mongoose = require('mongoose')

const atendimentoSchema = new mongoose.Schema({
    cliente: {type: String,required: true, nullable: false},
    pet:{type: String, nullable: false, required: true},
    servico:{type: String,nullable: false, required: true},
    status:{type: String, nullable: false, required: true},
    data: {type: Date, required: true, nullable: false}
})

const Atendimento = mongoose.model('atendimento', atendimentoSchema)

module.exports = Atendimento