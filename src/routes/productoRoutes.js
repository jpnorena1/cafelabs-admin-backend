const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const ventaController = require('../controllers/ventaController');

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Obtiene una lista de todos los productos disponibles.
 *     responses:
 *       200:
 *         description: Lista de productos exitosamente obtenida.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
// Ruta para obtener todos los productos
router.get('/', productoController.getAllProductos);

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
// Ruta para obtener un producto por su ID
router.get('/:id', productoController.getProductoById);

/**
 * @swagger
 * /productos/crearProducto:
 *   post:
 *     summary: Crea un nuevo producto
 *     requestBody:
 *       description: Datos del producto a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del producto
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto
 *               precio:
 *                 type: number
 *                 description: Precio del producto
 *               stock:
 *                 type: integer
 *                 description: Cantidad en stock del producto
 *               cantidadVendida:
 *                 type: integer
 *                 description: Cantidad vendida del producto
 *             required:
 *               - nombre
 *               - descripcion
 *               - precio
 *               - stock
 *               - cantidadVendida
 *     responses:
 *       '201':
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   description: Nombre del producto creado
 *                 descripcion:
 *                   type: string
 *                   description: Descripción del producto creado
 *                 precio:
 *                   type: number
 *                   description: Precio del producto creado
 *                 stock:
 *                   type: integer
 *                   description: Cantidad en stock del producto creado
 *                 cantidadVendida:
 *                   type: integer
 *                   description: Cantidad vendida del producto creado
 *       '400':
 *         description: Error en la solicitud
 */

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
