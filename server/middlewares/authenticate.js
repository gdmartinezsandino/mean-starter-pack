'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = '_sectretProjectPass';

exports.ensureAuth = (req, res, next) => {
  if (!req.headers.auth) {
    return res.status(403).send({
      message: 'La petición no tiene la cabecera de autenticación'
    })
  } else {
    const token = req.headers.auth.replace(/['"]+/g, '');

    try {
      const payload = jwt.decode(token, secret);

      if (payload.expiration <= moment().unix()) {
        res.status(401).send({
          message: 'El token ha expirado'
        })
      }

      req.user = payload;
    } catch(ex) {
      res.status(403).send({
        message: 'El token no es valido'
      })
    }

    next();
  }
};