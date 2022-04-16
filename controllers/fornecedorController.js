const Fornecedores = require("../models/Fornecedores")

class FornecedorController{
    static getAllFornecedores = async(req, res) => {
        try {
            const fornecedor = await Fornecedores.find()
            res.status(200).json(fornecedor)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static getAllFornecedoresById = async(req, res) => {
        try {
            const fornecedorId = req.params.id
            const fornecedor = await Fornecedores.findById(fornecedorId)
            res.status(200).json(fornecedor)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static createFornecedor = async(req, res) => {
        const fornecedor = {nome, empresa, email, categoria} = req.body
        const newFornecedor = new Fornecedores({nome, empresa, email, categoria})
        newFornecedor.save().then(() =>{
            res.status(201).json(fornecedor)
        }).catch((err) =>{
            res.status(400).json('Error to add a new payment' + err)
        });
    }
    static updatedFornecdor = async (req, res) => {
        try {
            const updatedFornecdor = await Fornecedores.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },{new: true})
            res.status(204).json(updatedFornecdor)
        }catch(err) {
            res.status(500).json(err)
        }
    }
    static deleteFornecedor = async(req, res) => {
        try {
            const deltedFornecedor = await Fornecedores.findByIdAndRemove(req.params.id)
            res.status(200).json(deltedFornecedor)
        }catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = FornecedorController
