const Pedido = require('../modelos/pedidos');

const crearPedido = async (req, res = express.request) => {
    const { id, fecha, coordenadas } = req.body;
    console.log(req.body);

    try {
        // Crear el pedido
        const pedido = new Pedido({ id, fecha });
        await pedido.save();

        return res.status(201).json({
            ok: true,
            msg: 'Pedido creado correctamente',
            pedido,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al crear el pedido',
        });
    }
};

module.exports = {
    crearPedido,
};
