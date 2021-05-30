const { response } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const getUsers = async(req, res) => {
    const from = Number(req.query.from) || 0;

    const [users, total] = await Promise.all([
        User.find({}, 'name email role google img').skip(from).limit(5),
        User.countDocuments()
    ]);

    res.json({
        ok: true,
        users,
        total
    });
};

const createUser = async(req, res = response) => {

    const { name, email, password } = req.body;


    try {
        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya esta registrado.'
            });
        }

        const user = new User(req.body);

        // Encriptar la constraseña
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        // Guardar el usuario
        await user.save();

        // Generar el TOKEN JWT
        const token = await generateJWT(user.id);


        res.json({
            ok: true,
            user,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }




};

const updateUsers = async(req, res = response) => {
    const uid = req.params.id;
    try {

        const userDB = await User.findById(uid);

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id.',

            });
        }

        const { password, google, email, ...fields } = req.body;

        if (userDB.email !== email) {
            // ValidateEmail(res, req.body.email);
            const emailExist = await User.findOne({ email: email });
            if (emailExist) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con este email.'
                });
            }
        }

        fields.email = email;
        const userUpdated = await User.findByIdAndUpdate(uid, fields, { new: true });

        res.json({
            ok: true,
            user: userUpdated
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });

    }
};

const deleteUser = async(req, res) => {
    const uid = req.params.id;
    try {

        const userDB = await User.findById(uid);

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id.',

            });
        }

        await User.findByIdAndDelete(uid);

        return res.status(200).json({
            ok: true,
            msg: 'El usario ha sido eliminado.'
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado.'
        });
    }
};

const ValidateEmail = async(res, newEmail) => {
    const emailExist = await User.findOne({ email: newEmail });
    result = "";
    if (emailExist) {
        result = res.status(400).json({
            ok: false,
            msg: 'Ya existe un usuario con este email.'
        });
    }

    return result;
};


module.exports = {
    getUsers,
    createUser,
    updateUsers,
    deleteUser,
};