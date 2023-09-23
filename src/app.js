const express = require('express');
const mongoose = require('./config/db'); // Importa la configuración de la conexión a la base de datos
const productoRoutes = require('./routes/productoRoutes'); // Importa las rutas de productos
const ventaRoutes = require('./routes/ventaRoutes');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'cafelabs-adm-backend', // Reemplaza con el nombre de tu API
      version: '3.1.0', // Reemplaza con la versión de tu API
      description: 'Documentación de la API de Cafelabs', // Reemplaza con la descripción de tu API
    },
     // Configuración del servidor y rutas
     servers: [
      {
        url: 'http://localhost:3000', // Reemplaza con la URL de tu servidor en producción
        description: 'Servidor de desarrollo',
      },
    ],
  },
  // Especifica los archivos que contienen las rutas y controladores de tu API
  apis: ['./routes/*.js'], // Reemplaza con la ubicación de tus archivos de rutas
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());

// Configuración de rutas
app.use('/productos', productoRoutes);
app.use('/ventas', ventaRoutes); 

// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
