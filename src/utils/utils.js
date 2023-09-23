const https = require('https');

// Función para obtener el clima por ubicación
async function obtenerClima() {
  const ubicacion = 'Bogota'; // Ubicación predeterminada
  const apiKey = '0462f5f0a63f2fef70468a7605302487'; // Reemplaza con tu clave de API de OpenWeatherMap
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&appid=${apiKey}`;

  return new Promise((resolve, reject) => {
    https.get(apiUrl, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const weatherData = JSON.parse(data);

          if (weatherData && weatherData.main && weatherData.main.temp) {
            const temperaturaKelvin = weatherData.main.temp;

            // Convierte la temperatura de Kelvin a grados Celsius y redondea a 2 decimales
            const temperaturaCelsius = (temperaturaKelvin - 273.15).toFixed(2);
            const convertInt= parseInt(temperaturaCelsius)
            let convertString= convertInt.toString()

            resolve({
              convertString,
            });
          } else {
            reject(new Error('La respuesta de la API no contiene datos de temperatura válidos.'));
          }
        } catch (error) {
          reject(new Error('Error al analizar los datos de clima: ' + error.message));
        }
      });
    }).on('error', (error) => {
      reject(new Error('Error al realizar la solicitud de clima: ' + error.message));
    });
  });
}

module.exports = {
  obtenerClima, // Exporta la función obtenerClima
};
