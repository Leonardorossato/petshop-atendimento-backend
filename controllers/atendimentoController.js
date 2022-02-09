const express = require('express')
const router = express.Router()
const Atendimentos = require('../models/Atendimentos')


router.post('/atendimento', async (req, res) => {
    try {
        const atendimento = await Atendimentos.create(req.body)
        res.status(201).json(atendimento)
    } catch (error) {
        
    }
})


module.exports = router