const express = require('express');
const mongoose = require('./config/db'); // Importa la configuración de la conexión a la base de datos
const productoRoutes = require('./routes/productoRoutes'); // Importa las rutas de productos
const app = express();

app.use(express.json());

// Configuración de rutas
app.use('/productos', productoRoutes);

// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
