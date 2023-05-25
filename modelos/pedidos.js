const {Schema,model} = require('mongoose');

const PedidosSchema = Schema({
    id:{
        type:Number,
        required:[true,"el id es obligatorio"],
        unique:true
    },
    fecha:{
        type:Date,
        required:[true,"la fecha es obligatoria"]
        
    },

},)


module.exports = model("pedidos",PedidosSchema)