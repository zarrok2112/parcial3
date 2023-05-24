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
},{
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
})

CoordenadaSchema.virtual('pedidos',{
    ref:'pedidos',
    localField:'pedidos_id',
    foreignField:'id',
    justOne:false,
})

module.exports = model("coordnadas",CoordenadaSchema)