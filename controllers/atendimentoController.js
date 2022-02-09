const express = require('express')
const router = express.Router()
const Atendimentos = require('../models/Atendimentos')

router.get('/', async(req, res)=>{
    try {
        const atendimento = await Atendimentos.findAll()
        res.status(200).json(atendimento)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/atendimento', async (req, res) => {
    try {
        const atendimento = await Atendimentos.create(req.body)
        res.status(201).json(atendimento)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.put('/atendimento/:id', async (req, res) => {
    try {
        const atendimentoId = req.params.id
        const atendimento = await Atendimentos.findOne({where: {id: atendimentoId}})
        atendimento.cliente = req.body.cliente
        atendimento.pet = req.body.pet
        atendimento.servico = req.body.servico
        atendimento.status = req.body.cliente
        atendimento.observacoes = req.body.observacoes
        await atendimento.save()
        res.status(200).json(atendimento)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/atendimento/:id', async (req, res) => {
    try {
        const atendimentoId = req.params.id
        const atendimento = await Atendimentos.destroy({where: {id: atendimentoId}})
        res.status(200).json(atendimento)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router