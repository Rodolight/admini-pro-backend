const { response } = require('express');
const Hospital = require('../models/hospital');

const getHospitals = async(req, res = response) => {

    const hospitals = await Hospital.find().populate('user', 'name');

    res.json({
        ok: true,
        hospitals
    });
};

const createHospitals = async(req, res = response) => {

    const uid = req.uid;
    const hospital = new Hospital({ user: uid, ...req.body });

    try {
        const hospitalDB = await hospital.save();

        res.json({
            ok: true,
            hospital: hospitalDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado.'
        });
    }

};

const updateHospitals = async(req, res = response) => {

    const uid = req.uid;
    const id = req.params.id;

    const hospitalDB = await Hospital.findById(id);
    if (!hospitalDB) {
        res.status(404).json({
            ok: false,
            msg: 'No se encontró Hospital con ese id.'
        });
    }

    const hospitalChanges = { user: uid, ...req.body };
    const updatedHospital = await Hospital.findByIdAndUpdate(id, hospitalChanges, { new: true });

    res.json({
        ok: true,
        hospital: updatedHospital
    });
};

const deleteHospital = async(req, res = response) => {

    const id = req.params.id;

    const hospitalDB = await Hospital.findById(id);
    if (!hospitalDB) {
        res.status(404).json({
            ok: false,
            msg: 'No se encontró Hospital con ese id.'
        });
    }

    await Hospital.findByIdAndDelete(id);

    res.json({
        ok: true,
        msg: 'Hospital eliminado correctamente.'
    });

};


module.exports = {
    getHospitals,
    createHospitals,
    updateHospitals,
    deleteHospital
};