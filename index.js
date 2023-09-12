const express = require('express');
const connectBD = require('./config/db');
var cors = require('cors')
var bodyparser = require('body-parser')



const app = express();//CREANDO EL SERVIDOR
connectBD();// estableciendo conexion con la bd
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

app.use(cors())
app.use('/api/usuarios', require('./routes/authUser'));

app.listen(PORT, () => {
    console.log(`servidor iniciado en puerto ${PORT}`);

})