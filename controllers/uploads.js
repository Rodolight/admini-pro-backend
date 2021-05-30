const { response } = require("express");
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const { updateImage } = require("../helpers/update-image");

const fileUpload = (req, res = response) => {

    const { type, id } = req.params;
    const validTypes = ['users', 'hospitals', 'doctors'];

    if (!validTypes.includes(type)) {
        return res.status(400).json({
            ok: false,
            msg: 'Debes seleccionar uno de estos tipos: [users, hospitals, doctors].'
        });
    }
    // Validar que exista un archivo en los parametros de entrada
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No hay ningún archivo seleccionado.'
        });
    }

    // Procesar el archivo
    const file = req.files.image;
    const shortName = file.name.split('.');
    const extensionFile = shortName[shortName.length - 1];

    //Validar entensiones permitidas
    const validExtension = ['jpg', 'png', 'jpeg', 'gif'];
    if (!validExtension.includes(extensionFile)) {
        return res.status(400).json({
            ok: false,
            msg: 'El archivo no tiene una extensión permitida.'
        });
    }

    // Generar el nombre del archivo
    const fileName = `${ uuidv4() }.${ extensionFile }`;

    // Path para guardar la imagen
    const path = `./uploads/${ type }/${ fileName }`;

    // Mover la imagen a la carpeta del servidor
    file.mv(path, (err) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                ok: false,
                msg: 'Error al mover la imagen.'
            });
        }

        res.status(200).json({
            ok: true,
            msg: fileName
        });

    });

    // Actualizar la base de datos
    updateImage(type, id, fileName);


};

const viewImageUploaded = (req, res = response) => {
    const { type, picture } = req.params;

    let pathImg = path.join(__dirname, `../uploads/${ type }/${ picture }`);
    if (!fs.existsSync(pathImg))
        pathImg = path.join(__dirname, "../uploads/no-img.jpg");

    res.sendFile(pathImg);
};

module.exports = {
    fileUpload,
    viewImageUploaded
};