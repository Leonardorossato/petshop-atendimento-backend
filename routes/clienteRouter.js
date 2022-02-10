const express = require('express')
const router = express.Router()
const Cliente = require('../models/Cliente')

router.get('/', async(req, res)=>{
    try {
        const cliente = await Cliente.find()
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/clientes/:id', async(req, res)=>{
    try {
        const clienteId = req.params.id
        const cliente = await Cliente.findById(clienteId)
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post('/clientes', async(req, res) => {
    const cliente = {nome, email, endereco, telefone} = req.body
    const newCliente = new Cliente({nome, email, endereco, telefone})
    newCliente.save().then(() =>{
        res.status(201).json(cliente)
    }).catch((err) =>{
        res.status(400).json('Error to add a new cliente' + err)
    });
})

router.put('/clientes/:id', async (req, res) => {
    try {
        const updateCliente = await Cliente.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },{new: true})
        res.status(200).json(updateCliente)
    }catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/clientes/:id', async (req, res) => {
    try {
        const deletedCliente = await Cliente.findByIdAndRemove(req.params.id)
        res.status(200).json(deletedCliente)
    }catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router