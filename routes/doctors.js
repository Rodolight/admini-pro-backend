const { Router } = require('express');

const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getDoctors, createDoctors, updateDoctors, deleteDoctor, getDoctorById } = require('../controllers/doctors');

const router = Router();

// Ruta para Obtener doctores
router.get('/', validateJWT, getDoctors);

// Ruta para Guardar un hospital
router.post('/', [
        validateJWT,
        check('name', 'El nombre del doctor es requerido.').notEmpty(),
        check('hospital', 'El hospital id no es válido.').isMongoId(),
        validateFields
    ],
    createDoctors);

// Ruta para Actualizar doctores
router.put('/:id', [
        validateJWT,
        check('name', 'El nombre del doctor es requerido.').notEmpty(),
        check('hospital', 'El hospital id no es válido.').isMongoId(),
    ],
    updateDoctors);


// Ruta para eliminar doctor
router.delete('/:id', validateJWT, deleteDoctor);

// Ruta para buscar un medico
router.get('/:id', validateJWT, getDoctorById);

// Exportar las rutas para que se puedan utilizar fuera de este controlador
module.exports = router;