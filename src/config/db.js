const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://cafelabadmin:Mariapaz.09@cluster0.1thdiei.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Elimina la opción useFindAndModify
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error de conexión a la base de datos:', error);
});

db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});

module.exports = mongoose;


