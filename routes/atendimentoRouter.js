const express = require('express')
const AtendimentoController = require('../controllers/atendimentoController')
const router = express.Router()

router.get('/', AtendimentoController.getAllAtendimentos)
router.get('/atendimento/:id', AtendimentoController.getAtendimentosById)
router.post('/', AtendimentoController.createAtendimento)
router.put('/atendimento/:id', AtendimentoController.updateAtendimento)
router.delete('/atendimento/:id', AtendimentoController.deltedAtendimento)


module.exports = router