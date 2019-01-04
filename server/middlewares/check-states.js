'use strict';

exports.availability = (req, res, next) => {
    req.user = {};
    req.user.state = 'ACTIVE';
    
    if (!req.user.state) {
        return res.status(403).send({
          message: 'La petición no tiene la cabecera de state'
        })
    } else {
        const state = req.user.state;
        try {
            if (state != 'ACTIVE') {
              res.status(401).send({
                  message: 'El usuario no ha sido activado'
              })
            }
        } catch (ex) {
            res.status(401).send({
                message: 'El usuario no ha sido activado'
            })
        }

        next();
    }
};