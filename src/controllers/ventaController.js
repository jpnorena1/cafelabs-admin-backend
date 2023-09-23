const Venta = require('../models/venta'); // Importa el modelo de Venta
const Producto = require('../models/producto'); // Importa el modelo de Producto (si es necesario)
const climaService = require('../utils/utils'); 

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
// Controlador para registrar una nueva venta
exports.registrarVenta = async (req, res) => {
  const { productos, medioPago } = req.body;

  try {
    // Verifica que haya productos en la venta
    if (!productos || productos.length === 0) {
      return res.status(400).json({ error: 'La venta debe contener al menos un producto' });
    }

    let totalVenta = 0;
    let nuevaVenta;

    for (const productoVenta of productos) {
      const { _id, cantidad } = productoVenta;

      if (isNaN(cantidad) || cantidad <= 0) {
        return res.status(400).json({ error: 'Cantidad de producto no válida' });
      }

      let producto = await Producto.findById(_id);

      if (!producto) {
        return res.status(404).json({ error: `Producto con ID ${_id} no encontrado` });
      }

      const subtotal = producto.precio * cantidad;
      totalVenta += subtotal;

      if (!nuevaVenta) {
        nuevaVenta = new Venta({
          productos: [],
          medioPago,
          total: 0,
        });
      }

      nuevaVenta.productos.push({
        producto: _id,
        cantidad,
        subtotal,
      });

      // Actualiza la cantidad vendida del producto
      producto.cantidadVendida += cantidad;
      producto.stock -= cantidad;

      // Guarda el producto actualizado en la base de datos
      await producto.save();
    }

    if (!isNaN(totalVenta) && nuevaVenta) {
      nuevaVenta.total = totalVenta;
    } else {
      nuevaVenta.total = 0;
    }

    // Llama a la función para obtener el clima

    const clima = await climaService.obtenerClima();
    const destructureClima=clima.convertString;


    await nuevaVenta.save();

    res.status(201).json({
      mensaje: 'Venta registrada con éxito',
      venta: nuevaVenta,
      temperaturaGrados: `${destructureClima}°C`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al registrar la venta' });
  }
};