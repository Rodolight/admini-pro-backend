const jwt = require('jsonwebtoken');
const user = require('../models/user');

const validateJWT = (req, res, next) => {
    // leer el token
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No existe un token en la petición.'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;

        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'El token no es válido.'
        });
    }


};

const validateAdminRole = async (req, res, next) => {
  const uid = req.uid;
  console.log(uid);
  try {
      const userDB = await user.findById(uid);

      if(!userDB){
          return res.status(404).json({
              ok: false,
              msg: 'Usuario no existe.'
          });
      }
     console.log(user.role);
      if(userDB.role !== 'ADMIN_ROLE'){
        return res.status(403).json({
            ok: false,
            msg: 'Usuario no Autorizado a realizar ese cambio.'
        });
      }

      next();
      
  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Ocurrio un error inesperado.'
      })
  }

}

const validateAdminRoleOrSelfUser = async (req, res, next) => {
    const uid = req.uid;
    const id = req.params.id;

    console.log(uid);
    try {
        const userDB = await user.findById(uid);
  
        if(!userDB){
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe.'
            });
        }
      
        if(userDB.role === 'ADMIN_ROLE' || uid == id ){
            next();
        }
        else {
          return res.status(403).json({
              ok: false,
              msg: 'Usuario no Autorizado a realizar ese cambio.'
          });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error inesperado.'
        })
    }
  
  }
  

module.exports = {
    validateJWT,
    validateAdminRole,
    validateAdminRoleOrSelfUser
};