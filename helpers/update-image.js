const fs = require('fs');

const User = require('../models/user');
const Hospital = require('../models/hospital');
const Doctor = require('../models/doctor');

const updateImage = (type, id, fileName) => {
    switch (type) {
        case 'users':
            saveImageDB(User, id, type, fileName, 'usuario');
            break;
        case 'hospitals':
            saveImageDB(Hospital, id, type, fileName, 'hospital');
            break;
        case 'doctors':
            saveImageDB(Doctor, id, type, fileName, 'médico');
            break;
        default:
            break;
    }
};

const saveImageDB = async(Table, id, type, fileName, err) => {
    const table = await Table.findById(id);
    if (!table) {
        console.log(`No es un ${err} por id.`);
        return false;
    }

    const oldPath = `./uploads/${type}/${ table.img }`;

    if (fs.existsSync(oldPath)) {
        //borra la imagen anterior
        fs.unlinkSync(oldPath);
    }
    table.img = fileName;
    await table.save();
    return true;
};

module.exports = {
    updateImage
};