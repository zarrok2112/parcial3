const {Schema,model} = require('mongoose');

const PedidosSchema = Schema({
    id:{
        type:Number,
        required:[true,"el id es obligatorio"]
    },
    fecha:{
        type:Date,
        required:[true,"la fecha es obligatoria"]
        
    },

},{
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
})


module.exports = model("pedidos",PedidosSchema)