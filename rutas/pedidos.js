const express = require('express');
const router = express.Router();
const pedidoController = require('../controladores/pedidos');

router.post('/', pedidoController.crearPedido);

module.exports = router;
