const express = require('express');
const FornecedorController = require('../controllers/fornecedorController');
const router = express.Router()

router.get('/', FornecedorController.getAllFornecedores);
router.get('/fornecedores/:id', FornecedorController.getAllFornecedoresById);
router.post('/fornecedores', FornecedorController.createFornecedor)
router.put('/fornecedores/:id',FornecedorController.updatedFornecdor)
router.delete('/fornecedores/:id', FornecedorController.deleteFornecedor)

module.exports = router