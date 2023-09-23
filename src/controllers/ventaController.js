const Venta = require('../models/venta'); // Importa el modelo de Venta
const Producto = require('../models/producto'); // Importa el modelo de Producto (si es necesario)




// Controlador para obtener todas las ventas
exports.obtenerTodasLasVentas = async (req, res) => {
  try {
    const ventas = await Venta.find(); // Obtiene todas las ventas desde la base de datos
    res.status(200).json(ventas); // Responde con la lista de ventas
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener las ventas' });
  }
};

// Controlador para obtener detalles de una venta por su ID
exports.obtenerDetallesDeVenta = async (req, res) => {
  const { id } = req.params; // Obtiene el ID de la venta desde los parámetros de la URL
  try {
    const venta = await Venta.findOne({ _id: ventaId, 'productos.productoId': _id });
    if (!venta) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }
    res.status(200).json(venta); // Responde con los detalles de la venta encontrada
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los detalles de la venta' });
  }
};
// Controlador para registrar una nueva venta
exports.registrarVenta = async (req, res) => {
 
};


