const express = require('express');
require('dotenv').config()
const { DBConnection } = require('../database/config');
const cors = require('cors');
const { crearCoordenada } = require('../controladores/coordenada');

class Server {
    constructor() {
        this.header = {
            cors: {
                origin: '*',
                methods: ['GET', 'POST'],
            }
        }
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        // this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        // this.routes();

        // Conectar a base de datos
        this.conectarDB();
        this.routes();

        // Sockets
        this.sockets();
    }
    middlewares() {
        // Directorio público
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }
     routes() {
        this.app.use('/api/pedidos', require('../rutas/pedidos'));
     }
    listen() {
        this.server.listen(this.port, () => {
            console.log(
                `Servidor corriendo en puerto ${this.port}`
            );
        });
    }
    async conectarDB() {
        await DBConnection();
    }

    sockets() {
        this.io.on('connection', socket => {
        const id = socket.handshake.query.id; // Obtener el ID de la consulta
        const randomNumber1 = socket.handshake.query.x;
        const randomNumber2 = socket.handshake.query.y;
      
          console.log(`Conexión establecida con ID: ${id}`);
  
          console.log('Número aleatorio 1:', randomNumber1);
          console.log('Número aleatorio 2:', randomNumber2);

          //crear cordenada
          crearCoordenada({ randomNumber1,randomNumber2, id });
      
          socket.on('cambio-coordenada', payload => {
            console.log('Coordenada cambiada');
          });
        });
      }
}

module.exports = Server;