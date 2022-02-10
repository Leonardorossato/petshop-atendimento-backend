const mongoose = require('mongoose')

const atendimentoSchema = new mongoose.Schema({
    pet:{type: String, nullable: false, required: true},
    servico:{type: String,nullable: false, required: true},
    status:{type: String, nullable: false, required: true},
    data: {type: Date, required: true, nullable: false},
    observacoes:{type: String, nullable: false, required: true},
    clienteId:{type:mongoose.Types.ObjectId, ref: 'cliente', nullable: false},
})

const Atendimento = mongoose.model('atendimento', atendimentoSchema)

module.exports = Atendimento