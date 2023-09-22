const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const ventaController = require('../controllers/ventaController');
// Ruta para obtener todos los productos
router.get('/', productoController.getAllProductos);

// Ruta para obtener un producto por su ID
router.get('/:id', productoController.getProductoById);

// Ruta para crear un nuevo producto
router.post('/crearProducto', productoController.createProducto);

// Ruta para actualizar un producto por su ID
router.put('/:id', productoController.updateProducto);

// Ruta para eliminar un producto por su ID
router.delete('/:id', productoController.deleteProducto);

 // Ruta para obtener productos por clasificación
router.get('/por-clasificacion/:clasificacion', productoController.getProductosPorClasificacion);

// Ruta para registrar una venta con clasificación por medio de pago
router.post('/registrar-venta', ventaController.registrarVenta);


module.exports = router;
