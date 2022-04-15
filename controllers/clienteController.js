const Cliente = require("../models/Cliente")

class ClienteController{
    static getAllClient = async(req, res) => {
        try {
            const cliente = await Cliente.find()
            res.status(200).json(cliente)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static getClientById = async(req, res) => {
        try {
            const clienteId = req.params.id
            const cliente = await Cliente.findById(clienteId)
            res.status(200).json(cliente)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static createClient = async(req, res) => {
        const cliente = {nome, email, endereco, telefone} = req.body
        const newCliente = new Cliente({nome, email, endereco, telefone})
        newCliente.save().then(() =>{
            res.status(201).json(cliente)
        }).catch((err) =>{
            res.status(400).json('Error to add a new cliente' + err)
        });
    }
    static updateCliente = async(req, res) => {
        try {
            const updateCliente = await Cliente.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },{new: true})
            res.status(200).json(updateCliente)
        }catch(err) {
            res.status(500).json(err)
        }
    }
    static deletedCliente = async(req, res) => {
        try {
            const deletedCliente = await Cliente.findByIdAndRemove(req.params.id)
            res.status(200).json(deletedCliente)
        }catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = ClienteController