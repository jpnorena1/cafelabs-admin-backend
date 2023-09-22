const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Ruta para obtener todos los productos
router.get('/', productoController.getAllProductos);

// Ruta para obtener un producto por su ID
router.get('/:id', productoController.getProductoById);

// Ruta para crear un nuevo producto
router.post('/crearProducto', productoController.createProducto);



module.exports = router;
