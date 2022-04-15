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
}

module.exports = ClienteController