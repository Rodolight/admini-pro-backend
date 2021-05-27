const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();


router.post('/', [
        check('email', 'El email es requerido.').isEmail(),
        check('password', 'La contraseña es requerida.').notEmpty(),
        validateFields
    ],
    login);




module.exports = router;