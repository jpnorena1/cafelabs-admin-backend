const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now, // Fecha de la venta (por defecto, la fecha actual)
  },
  productos: [
    {
      productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto', // Hace referencia al modelo de Producto
      },
      cantidad: Number,
    },
  ],
  total: Number, // Total de la venta
  medioPago: String, // Medio de pago utilizado
});

module.exports = mongoose.model('Venta', ventaSchema);
