const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleSingIn } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();


router.post('/', [
        check('email', 'El email es requerido.').isEmail(),
        check('password', 'La contraseña es requerida.').notEmpty(),
        validateFields
    ],
    login);

router.post('/google', [
        check('token', 'El token es requerido.').notEmpty(),
        validateFields
    ],
    googleSingIn
);




module.exports = router;