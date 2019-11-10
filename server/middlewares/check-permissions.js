'use strict';

exports.isAdmin = (req, res, next) => {
    req.user.role = 'Admin';
    if (!req.user) {
        return res.status(403).send({
            message: 'La petición no tiene la cabecera user'
        })
    } else {
        try {
            const role = req.user.role;
            if (role != 'Admin') {
                res.status(401).send({
                    message: 'No tienes suficientes permisos para realizar esta acción'
                })
            }
        } catch(ex) {
            res.status(403).send({
                message: 'No tienes suficientes permisos para realizar esta acción'
            })
        }

        next();
    }
};