const { Router } = require("express");
const expressFileUpload = require('express-fileupload');

const { fileUpload, viewImageUploaded } = require("../controllers/uploads");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.use(expressFileUpload());

router.put('/:type/:id', validateJWT, fileUpload);
router.get('/:type/:picture', viewImageUploaded);



module.exports = router;