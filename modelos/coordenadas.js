const {Schema,model} = require('mongoose');

const CoordenadaSchema = Schema({
    x:{
        type:Number,
        required:[true,"el eje x es obligatorio"]
    },
    y:{
        type:Number,
        required:[true,"el eje y es obligatorio"]
    },
    pedidos_id:{
        type:Number,
        required:[true,"el pedido es obligatorio"]
    }
},)

module.exports = model("coordnadas",CoordenadaSchema)