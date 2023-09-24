# Cafelabs Admin Backend


Este es el repositorio del backend del administrador de Cafelabs, una aplicación para gestionar productos de cafetería.

## Contenido

1. [Introducción](#introducción)
2. [Configuración](#configuración)
3. [Base de Datos](#base-de-datos)
4. [API REST](#api-rest)
5. [Swagger/OpenAPI](#swaggeropenapi)
6. [Despliegue](#despliegue)
7. [Contribución](#contribución)
8. [Licencia](#licencia)

## Introducción

Cafelabs es una aplicación diseñada para digitalizar los procesos de gestión de productos de cafetería. Esta parte del proyecto se enfoca en el backend que proporciona una API REST para realizar operaciones como crear, actualizar, eliminar productos, obtener inventario y más.

## Configuración

Para configurar el proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/cafelabs-admin-backend.git

Instala las dependencias:

cd cafelabs-admin-backend
npm install
Crea un archivo .env en el directorio raíz y configura las variables de entorno necesarias.
    Inicia el servidor:
    npm start
Base de Datos
Se ha utilizado  MongoDB como base de datos para este proyecto. El esquema de la base de datos se encuentra en el directorio src/models.
El backend utiliza una base de datos MongoDB para almacenar los usuarios registrados e información del sistema. Para crear la BD, ejecuta.

API REST
Es una API REST con las siguientes rutas principales:

GET /productos: Obtiene todos los productos.
GET /productos/{id}: Obtiene un producto por su ID.
POST /productos/crearProducto: Crea un nuevo producto.
PUT /productos/{id}: Actualiza un producto por su ID.
DELETE /productos/{id}: Elimina un producto por su ID.
GET /productos/por-clasificacion/{clasificacion}: Obtiene productos por clasificación.
POST /productos/registrar-venta: Registra una nueva venta con detalles.

Swagger/OpenAPI
Se  implemento Swagger para documentar los endpoints de la API. Puedes acceder a la documentación en http://localhost:3000/api-docs una vez que el servidor esté en funcionamiento.
