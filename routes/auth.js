const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleSingIn, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

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

router.get('/renew', validateJWT, renewToken);


module.exports = router;