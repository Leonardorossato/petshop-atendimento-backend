const Atendimento = require("../models/Atendimentos")


class AtendimentoController{
    static getAllAtendimentos = async(req, res) => {
        try {
            const atendimento = await Atendimento.find()
            res.status(200).json(atendimento)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static getAtendimentosById = async(req, res) => {
        try {
            const atendimentoId = req.params.id
            const atendimento = await Atendimento.findById(atendimentoId)
            res.status(200).json(atendimento)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static createAtendimento = async(req, res) => {
        const atendimento = { pet, servico, status, data, observacoes} = req.body
        const newAtendimento = new Atendimento({pet,servico,status,data,observacoes})
        newAtendimento.save().then(() =>{
            res.status(201).json(atendimento)
        }).catch((err) =>{
            res.status(400).json('Error to add a new atendimento' + err)
        });
    }
    static updateAtendimento = async (req, res) =>{
        try {
            const atendimentoUpdated = await Atendimento.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },{new: true})
            res.status(200).json(atendimentoUpdated)
        }catch(err) {
            res.status(500).json(err)
        }
    }
    static deltedAtendimento = async(req, res) => {
        try {
            const deltedAtendimento = await Atendimento.findByIdAndRemove(req.params.id)
            res.status(200).json(deltedAtendimento)
        }catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = AtendimentoController