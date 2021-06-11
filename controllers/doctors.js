const { response } = require('express');
const Doctor = require('../models/doctor');

const getDoctors = async(req, res = response) => {
    const doctors = await Doctor.find()
        .populate('user', 'name img')
        .populate('hospital', 'name img');
    res.json({
        ok: true,
        doctors
    });
};

const getDoctorById = async(req, res = response) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id)
            .populate('user', 'name img')
            .populate('hospital', 'name img');

        res.json({
            ok: true,
            doctor
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: `No existe ningún médico con ese id: ${id}`
        });
    }

};


const createDoctors = async(req, res = response) => {

    const uid = req.uid;
    const doctor = new Doctor({ user: uid, ...req.body });
    try {

        const doctorDB = await doctor.save();
        res.json({
            ok: true,
            doctor: doctorDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error inesperado.'
        });
    }

};

const updateDoctors = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;

    const doctorDB = await Doctor.findById(id);
    if (!doctorDB) {
        res.status(404).json({
            ok: false,
            msg: 'No se encontró un médico con ese id.'
        });
    }

    const doctorChanges = { user: uid, ...req.body };
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, doctorChanges, { new: true });

    res.json({
        ok: true,
        doctor: updatedDoctor
    });
};

const deleteDoctor = async(req, res = response) => {

    const id = req.params.id;

    const doctorDB = await Doctor.findById(id);
    if (!doctorDB) {
        res.status(404).json({
            ok: false,
            msg: 'No se encontró un médico con ese id.'
        });
    }

    await Doctor.findByIdAndDelete(id);

    res.json({
        ok: true,
        msg: 'Médico eliminado correctamente.'
    });
};


module.exports = {
    getDoctors,
    getDoctorById,
    createDoctors,
    updateDoctors,
    deleteDoctor
};