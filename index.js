require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();
console.log(process.env);

// mean_user
// uJ1OS2n9jSdIxBD1
// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});



app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ', process.env.PORT);
});