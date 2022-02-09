const express = require('express')
const router = express.Router()
const Atendimento = require('../models/Atendimentos')

router.get('/', async(req, res)=>{
    try {
        const atendimento = await Atendimento.find()
        res.status(200).json(atendimento)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/atendimento/:id', async(req, res)=>{
    try {
        const atendimentoId = req.params.id
        const atendimento = await Atendimento.findById(atendimentoId)
        res.status(200).json(atendimento)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/atendimento', async (req, res) => {
    const atendimento = {cliente, pet, servico, status, data, observacoes} = req.body
    const newAtendimento = new Atendimento({cliente,pet,servico,status,data,observacoes})
    newAtendimento.save().then(() =>{
        res.status(201).json(atendimento)
    }).catch((err) =>{
        es.status(400).json('Error to add a new payment' + err)
    });
})

router.put('/atendimento/:id', async (req, res) => {
    try {
        const atendimentoUpdated = await Atendimento.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },{new: true})
        res.status(200).json(atendimentoUpdated)
    }catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/atendimento/:id', async (req, res) => {
    try {
        const deltedAtendimento = await Atendimento.findByIdAndRemove(req.params.id)
        res.status(200).json(deltedAtendimento)
    }catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router