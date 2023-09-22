const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  clasificacion: String,
  medioPago: String,
});

module.exports = mongoose.model('Producto', productoSchema);

 