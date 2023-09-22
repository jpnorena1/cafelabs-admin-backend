// Importa el modelo de Producto
const Producto = require('../models/producto.js');

// Controlador para obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await  Producto.find()
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los productos'+error });
  }
};

// Controlador para obtener un producto por ID
exports.getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el producto' });
  }
};

exports.createProducto = async (req, res) => {
  try {
    // Obtén los datos del producto del cuerpo de la solicitud
    const { nombre, descripcion } = req.body;

    // Crea una nueva instancia del modelo Producto

    const nuevoProducto = new Producto({
      nombre,
      descripcion,


    });

    // Guarda el nuevo producto en la base de datos
    await nuevoProducto.save();

    // Responde con el producto recién creado
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al crear el producto' });
  }
};

