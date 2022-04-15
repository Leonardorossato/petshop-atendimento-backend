const express = require('express');
const router = express.Router()
const ClienteController = require('../controllers/clienteController');

router.get('/', ClienteController.getAllClient);
router.get('/clientes/:id', ClienteController.getClientById);
router.post('/', ClienteController.createClient)
router.put('/clientes/:id', ClienteController.updateCliente)
router.delete('/clientes/:id', ClienteController.deletedCliente)

module.exports = router