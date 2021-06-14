const { Router } = require('express');
const { check } = require('express-validator');

const { getUsers, createUser, updateUsers, deleteUser } = require('../controllers/users');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT, validateAdminRole, validateAdminRoleOrSelfUser } = require('../middlewares/validate-jwt');

const router = Router();

// Ruta para Obtener usuarios
router.get('/', validateJWT, getUsers);
// Ruta para Guardar un usuario
router.post('/', [
        check('name', 'El nombre es requerido.').not().isEmpty(),
        check('password', 'La contraseña es requerida.').not().isEmpty(),
        check('email', 'El email es requerido.').isEmail(),
        validateFields
    ],
    createUser);

// Ruta para Actualizar usuarios
router.put('/:id', [
        validateJWT,
        validateAdminRoleOrSelfUser,
        check('name', 'El nombre es requerido.').not().isEmpty(),
        check('role', 'El rol es requerido.').not().isEmpty(),
        check('email', 'El email es requerido.').isEmail(),
        validateFields
    ],
    updateUsers);

router.delete('/:id', [validateJWT, validateAdminRole], deleteUser);

// Exportar las rutas para que se puedan utilizar fuera de este controlador
module.exports = router;