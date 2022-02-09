const express = require('express')
const router = express.Router()
const Fornecedores = require('../models/Fornecedores')

router.get('/', async(req, res)=>{
    try {
        const fornecedor = await Fornecedores.find()
        res.status(200).json(fornecedor)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/fornecedores/:id', async(req, res)=>{
    try {
        const fornecedorId = req.params.id
        const fornecedor = await Fornecedores.findById(fornecedorId)
        res.status(200).json(fornecedor)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/fornecedores', async(req, res) => {
    const fornecedor = {nome, empresa, email, categoria} = req.body
    const newFornecedor = new Fornecedores({nome, empresa, email, categoria})
    newFornecedor.save().then(() =>{
        res.status(201).json(fornecedor)
    }).catch((err) =>{
        res.status(400).json('Error to add a new payment' + err)
    });
})

router.put('/fornecedores/:id', async (req, res) => {
    try {
        const updatedFornecdor = await Fornecedores.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },{new: true})
        res.status(200).json(updatedFornecdor)
    }catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/fornecedores/:id', async (req, res) => {
    try {
        const deltedFornecedor = await Fornecedores.findByIdAndRemove(req.params.id)
        res.status(200).json(deltedFornecedor)
    }catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router