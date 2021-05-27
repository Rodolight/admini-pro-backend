require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base de datos
dbConnection();

// mean_user
// uJ1OS2n9jSdIxBD1
// Rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/auth'));



app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ', process.env.PORT);
});