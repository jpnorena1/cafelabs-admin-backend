const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

/**
 * @swagger
 * /ventas/registrar-venta:
 *   post:
 *     summary: Registrar una nueva venta
 *     requestBody:
 *       description: Datos de la venta a registrar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productoId:
 *                       type: string
 *                       description: ID del producto
 *                     cantidad:
 *                       type: integer
 *                       description: Cantidad de productos vendidos
 *                 required:
 *                   - productoId
 *                   - cantidad
 *               medioPago:
 *                 type: string
 *                 description: Medio de pago utilizado en la venta
 *     responses:
 *       '201':
 *         description: Venta registrada exitosamente
 *         content:
 *           application/json:
 *             schema:

 */
// Ruta para registrar una nueva venta
router.post('/registrar-venta', ventaController.registrarVenta);
/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Obtiene todas las ventas
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 */

// Ruta para obtener todas las ventas
router.get('/', ventaController.obtenerTodasLasVentas);
/**
 * @swagger
 * /ventas/{id}:
 *   get:
 *     summary: Obtiene detalles de una venta por su ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la venta
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 */

// Ruta para obtener detalles de una venta por su ID
router.get('/:id', ventaController.obtenerDetallesDeVenta);


module.exports = router;
