const { response } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/google-verify');
const { getMenuFrontEnd } = require('../helpers/menu-frontEnd');

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
            token,
            menu: getMenuFrontEnd(userDB.role)
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado'
        });
    }
};

const googleSingIn = async(req, res = response) => {

    const googleToken = req.body.token;

    try {
        const { name, email, picture } = await googleVerify(googleToken);
        //Validar si el email existe
        const userDB = await User.findOne({ email });
        let user;
        // usuario no existe
        if (!userDB) {
            user = new User({
                name,
                email,
                password: "@@@",
                img: picture,
                role: "USER_ROLE",
                google: true
            });
        } else {
            user = userDB;
            user.google = true;
            user.password = "@@@";
        }
        // Guardar en DB
        await user.save();

        // Generar el Token -JWT
        const token = await generateJWT(user.id);

        res.json({
            ok: true,
            token,
            menu: getMenuFrontEnd(user.role)
        });

    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no válido.'
        });
    }

};

const renewToken = async(req, res = response) => {
    const uid = req.uid;

    const token = await generateJWT(uid);

    const user = await User.findById(uid);

    res.json({
        ok: true,
        token,
        user,
        menu: getMenuFrontEnd(user.role)
    });
};

module.exports = {
    login,
    googleSingIn,
    renewToken
};