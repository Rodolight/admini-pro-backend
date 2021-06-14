const { response } = require('express');
const Hospital = require('../models/hospital');
const User = require('../models/user');
const Doctor = require('../models/doctor');


const getAll = async(req, res = response) => {

    const param = req.params.search;
    const regex = new RegExp(param, 'i');

    try {

        const [users, hospitals, doctors] = await Promise.all([
            User.find({ name: regex }),
            Hospital.find({ name: regex }),
            Doctor.find({ name: regex })
        ]);

        res.status(200).json({
            ok: true,
            users,
            hospitals,
            doctors
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado.'
        });
    }
};

const getCollection = async(req, res = response) => {

    const table = req.params.table;
    const search = req.params.search;
    const regex = new RegExp(search, 'i');
    let data = [];

    switch (table) {
        case 'users':
            data = await User.find({ name: regex });
            break;

        case 'hospitals':
            data = await Hospital.find({ name: regex }).populate('user', 'name img');
            break;

        case 'doctors':
            data = await Doctor.find({ name: regex }).populate('user', 'name img')
                .populate('hospital', 'name img');
            break;

        default:
            return res.status(400).json({
                ok: false,
                msg: 'La tabla debe ser users,hospitals ó doctors.'
            });
    }


    res.status(200).json({
        ok: true,
        result: data
    });

};



module.exports = {
    getAll,
    getCollection
};