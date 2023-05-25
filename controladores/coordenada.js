const Coordenada = require('../modelos/coordenadas');

const crearCoordenada = async ({ randomNumber1, randomNumber2, id }) => {
    try {
      // Crear la coordenada
      const coordenada = new Coordenada({ x: randomNumber1, y: randomNumber2, pedidos_id: id });
      await coordenada.save();
      console.log('Coordenada creada correctamente:', coordenada);
    } catch (error) {
      console.log('Error al crear la coordenada:', error);
    }
  };

module.exports = {
  crearCoordenada,
};