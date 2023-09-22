const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Ruta para registrar una nueva venta
router.post('/registrar-venta', ventaController.registrarVenta);

// Ruta para obtener todas las ventas
router.get('/ventas', ventaController.obtenerTodasLasVentas);

// Ruta para obtener detalles de una venta por su ID
router.get('/venta/:id', ventaController.obtenerDetallesDeVenta);

// Otras rutas relacionadas con ventas (actualizar, eliminar, etc.) pueden agregarse aquí

module.exports = router;
