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

// Controlador para crear un producto
exports.createProducto = async (req, res) => {
  try {
    // Obtén los datos del producto del cuerpo de la solicitud
    const { nombre, descripcion,precio, stock, cantidadVendida } = req.body;

    // Crea una nueva instancia del modelo Producto

    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      stock,
      cantidadVendida
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

// Controlador para actualizar un producto por su ID
exports.updateProducto = async (req, res) => {
  const { id } = req.params; // Obtenemos el ID del producto de los parámetros de la URL
  const { nombre, descripcion, precio } = req.body; // Obtenemos los datos actualizados del cuerpo de la solicitud

  try {
    // Buscamos el producto por su ID en la base de datos
    const producto = await Producto.findById(id);

    // Si el producto no se encuentra, respondemos con un estado 404 (No encontrado)
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Actualizamos los datos del producto con los valores proporcionados en la solicitud
    producto.nombre = nombre;
    producto.descripcion = descripcion;
    producto.precio = precio;

    // Guardamos el producto actualizado en la base de datos
    await producto.save();

    // Respondemos con el producto actualizado
    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al actualizar el producto' });
  }
};

// Controlador para eliminar un producto por su ID
exports.deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    // Busca el producto por su ID y elimínalo
    const producto = await Producto.findByIdAndRemove(id);

    // Verifica si el producto se encontró y se eliminó con éxito
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Respuesta exitosa (204 indica que no hay contenido en la respuesta)
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al eliminar el producto' });
  }
};
// Controlador para obtener productos por clasificación
exports.getProductosPorClasificacion = async (req, res) => {
  const { clasificacion } = req.params; // Obtenemos la clasificación de los parámetros de la URL

  try {
    // Buscamos los productos con la clasificación especificada en la base de datos
    const productos = await Producto.find({ clasificacion });

    // Respondemos con la lista de productos encontrados
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los productos' });
  }
};

