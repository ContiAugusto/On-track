const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtoController')

router.get('/', produtoController.getAllprodutos)

router.get('/:id', produtoController.getprodutoById)

router.post('/', produtoController.createproduto)

router.put('/:id', produtoController.updateproduto)

router.delete('/:id', produtoController.deleteproduto)

module.exports = router
