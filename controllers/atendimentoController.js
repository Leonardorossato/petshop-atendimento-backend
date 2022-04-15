const Atendimento = require("../models/Atendimentos")


getAllAtendimentos = async(req, res, next) => {
    try {
        const atendimento = await Atendimento.find()
        res.status(200).json(atendimento)
    } catch (error) {
        res.status(500).json(error)
    }
}