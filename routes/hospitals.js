const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getHospitals, createHospitals, updateHospitals, deleteHospital } = require('../controllers/hospitals');

const router = Router();

// Ruta para Obtener hospitales
router.get('/', getHospitals);
// Ruta para Guardar un hospital
router.post('/', [
        validateJWT,
        check('name', 'El nombre del hospital es requerido.').notEmpty(),
        validateFields
    ],
    createHospitals);

// Ruta para Actualizar hospitales
router.put('/:id', [

    ],
    updateHospitals);

router.delete('/:id', deleteHospital);

// Exportar las rutas para que se puedan utilizar fuera de este controlador
module.exports = router;