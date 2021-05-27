const { response } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        // Validar email
        const userDB = await User.findOne({ email });

        if (!userDB) {
            res.status(404).json({
                ok: false,
                msg: 'El email no existe.' // cambiar para produccion por datos no coinciden
            });
        }

        // Validar password
        const validatePassword = bcrypt.compareSync(password, userDB.password);
        if (!validatePassword) {
            res.status(400).json({
                ok: false,
                msg: 'La contraseña no es válida.'
            });
        }

        // Generar el TOKEN JWT
        const token = await generateJWT(userDB.id);

        res.json({
            ok: true,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado'
        });
    }
};


module.exports = {
    login,
};