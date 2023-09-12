const mongoose = require('mongoose');
require('dotenv').config({path:'var.env'})

const connectBD = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_DB);   
        console.log('base de datos conectada correctamente')
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectBD

