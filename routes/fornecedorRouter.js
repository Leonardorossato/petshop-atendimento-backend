const express = require('express')
const router = express.Router()
const Fornecedores = require('../models/Fornecedores')

router.get('/', async(req, res)=>{
    try {
        const fornecedor = await Fornecedores.findAll()
        res.status(200).json(fornecedor)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/fornecedor/:id', async(req, res)=>{
    try {
        const fornecedorId = req.params.id
        const fornecedor = await Fornecedores.findOne({where: {id: fornecedorId}})
        res.status(200).json(fornecedor)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/fornecedor', async (req, res) => {
    try {
        const fornecedor = await Fornecedores.create(req.body)
        res.status(201).json(fornecedor)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.put('/fornecedor/:id', async (req, res) => {
    try {
        const fornecedorId = req.params.id
        const fornecedor = await Fornecedores.findOne({where: {id: fornecedorId}})
        fornecedor.nome = req.body.nome
        fornecedor.empresa = req.body.empresa
        fornecedor.email = req.body.email
        fornecedor.catergoria = req.body.catergoria
        await fornecedor.save()
        res.status(200).json(fornecedor)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/fornecedor/:id', async (req, res) => {
    try {
        const fornecedorId = req.params.id
        const fornecedor = await Fornecedores.destroy({where: {id: fornecedorId}})
        res.status(200).json(fornecedor)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router