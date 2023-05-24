const Pedido = require('../modelos/pedidos');
const Coordenada = require('../modelos/coordenadas');

const crearPedido = async (req, res = express.request) => {
    const { id, fecha, coordenadas } = req.body;
    console.log(req.body);

    try {
        // Crear el pedido
        const pedido = new Pedido({ id, fecha });
        await pedido.save();

        // Crear las coordenadas y asociarlas al pedido
        const coordenadasPromises = coordenadas.map(async (coordenada) => {
            const { x, y } = coordenada;
            const nuevaCoordenada = new Coordenada({ x, y, pedidos_id: pedido._id });
            await nuevaCoordenada.save();
        });

        await Promise.all(coordenadasPromises);

        res.status(201).json({
            ok: true,
            msg: 'Pedido creado correctamente',
            pedido,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el pedido',
        });
    }
};

module.exports = {
    crearPedido,
};
