const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  clasificacion: String,
  medioPago: String,
  precio:Number,
  stock: Number,
  cantidadVendida: Number,
});

module.exports = mongoose.model('Producto', productoSchema);

 