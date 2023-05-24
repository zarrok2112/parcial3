const mongoose = require('mongoose');

const DBConnection = async() => {
        try {
            mongoose.set('strictQuery', false); // Desactivar strictQuery
            await mongoose.connect(process.env.DB_CONNECT, {
                autoIndex: true,
            });
            console.log('Base de datos online');
        } catch (error) {
            console.log(error);
            
        }
    }

module.exports = {
    DBConnection
}
