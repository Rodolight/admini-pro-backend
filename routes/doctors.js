const { Router } = require('express');

const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getDoctors, createDoctors, updateDoctors, deleteDoctor } = require('../controllers/doctors');

const router = Router();

// Ruta para Obtener doctores
router.get('/', getDoctors);
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

    ],
    updateDoctors);

router.delete('/:id', deleteDoctor);

// Exportar las rutas para que se puedan utilizar fuera de este controlador
module.exports = router;