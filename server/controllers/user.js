'use strict';

const fs = require('fs');
const path = require('path');

const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');

const User = require('../models/user');

const jwt = require('../services/jwt');

const hbs = require('nodemailer-express-handlebars');

const Email = require('../config/mail');
Email.transporter.use('compile', hbs({
  viewEngine: 'hbs',
  extName: '.hbs',
  viewPath: path.join(__dirname, '../views/templates-email')
}))

function createUser(req, res) {
  let user = new User();
  let params = req.body;

  let dispatchSave = () => {
    user.username = params.username;
    user.name = params.name;
    user.lastname = !params.lastname ? '' : params.lastname;
    user.email = params.email;
    user.role = params.role;
    user.image = !params.image ? '' : params.image;
    user.position = !params.position ? '' : params.position;
    user.city = !params.city ? '' : params.city;
    user.country = !params.country ? '' : params.country;
    user.gender = !params.gender ? '' : params.gender;
    user.bornDate = !params.bornDate ? '' : params.bornDate;
    user.state = 'PENDING';
    user.create_at = moment().unix();
    user.last_login = '';

    bcrypt.hash(params.password, null, null, (err, hash) => {
      if (err) {
        res.status(500).send({
          message: '[ERROR] - Generando el hash en el password / Linea 46'
        })
      } else {
        user.password = hash;
        user.save((err, userStored) => {
          if (err) {
            res.status(500).send({
              message: '[ERROR] - Guardando el usuario / Linea 53'
            })
          } else {
            const messageEmail = {
              to: `${user.name} ${user.lastname} <${user.email}>`,
              subject: 'application-title Activación de Usuario',
              template: 'to-activate-user',
              context: {
                title: 'Activación de Usuario',
                link: `${process.env.IPPROD}/active-user?user=${userStored._id}`,
                copyright: `© ${moment().format('YYYY')}, <a style="text-decoration: none; font-weight: 700; color: #8D949E;" href="http://www.google.com/">Enso Application</a>. All rights reserved.`
              },
              attachments: [
                {
                  filename: 'logo-fileo.png',
                  path: path.join(__dirname, '../assets/logo-fileo.png'),
                  cid: 'logo',
                }
              ]
            }

            Email.transporter.sendMail(messageEmail, (error, info) => {
              if (error) {
                console.log(error);
                res.status(500).send({
                  message: 'Error enviando el email al administrador'
                })

                return;
              }
      
              Email.transporter.close();
              res.status(200).send({
                message: 'Usuario registrado con exito. Se ha enviado un correo con las instrucciones para activar su usuario.',
                user: true
              })
            })
          }
        })
      }
    })
  }

  let validatorEmail = () => {
    User.findOne({ email: params.email.toLowerCase() }, (err, userFound) => {
      if (err) {
        res.status(500).send({
          message: 'Verificando la existencia del usuario'
        })
      } else {
        if (!userFound) {
          validatorUsername();
        } else {
          res.status(500).send({
            message: 'Ya existe un usuario con ese email registrado'
          })
        }
      }
    })
  }

  let validatorUsername = () => {
    User.findOne({ username: params.username }, (err, userFound) => {
      if (err) {
        res.status(500).send({
          message: 'Verificando la existencia del usuario'
        })
      } else {
        if (!userFound) {
          dispatchSave();
        } else {
          res.status(500).send({
            message: 'Ya existe un usuario con ese username registrado'
          })
        }
      }
    })
  }

  if (!params.username || !params.name || !params.email || !params.password || !params.role) {
    res.status(500).send({
      message: 'Los campos requeridos son: username, name, email, password y role. Validar la información enviada'
    })
  } else {
    validatorEmail();
  }
}

function activeUser(req, res) {
  const id = req.params.id;
  const activeState = 'ACTIVE';
  User.findById(id, (err, userToUpdate) => {
    if (err) {
      res.status(500).send({
        message: 'Error encontrando el usuario.'
      })
    } else {
      if (!userToUpdate) {
        res.status(500).send({
          message: 'No se ha encontrado un usuario con esos datos.'
        })
      } else {
        if (userToUpdate.state === 'ACTIVE') {
          res.status(200).send({
            message: 'El usuario ya ha sido activado',
          })
        } else {
          userToUpdate.state = activeState;
          userToUpdate.save((err, userStored) => {
            if (err) {
              res.status(500).send({
                message: '[ERROR] - Guardando el usuario',
                error: err
              })
            } else {
              res.status(200).send({
                message: 'El usuario ha sido activado con exito',
              })
            }
          })
        }
      }
    }
  })
}

function updateUser(req, res) {
  let id = req.params.id;
  let dataNew = req.body;

  if (dataNew._id) {
    delete dataNew._id;
  }

  User.findById(id, (err, userToUpdate) => {
    if (err) {
      res.status(500).send({
        message: 'No se ha encontrado el usuario'
      })
    } else {
      for (let property in dataNew) {
        if (dataNew[property] !== userToUpdate[property] && dataNew[property] !== '') {
          userToUpdate[property] = dataNew[property];
        }
      }
      
      userToUpdate.save((err, updated) => {
        if (err) {
          res.status(500).send({
            message: 'Error al actualizar el usuario'
          })
        } else {
          if (!updated) {
            res.status(404).send({
              message: 'No se ha actualizo el usuario'
            })
          } else {
            let userToSend = updated.toObject();
            delete userToSend.password;
            
            res.status(200).send({
              message: 'Usuario actualizado con exito',
              user: userToSend
            })
          }
        }
      })
    }
  })
}

function changePassword(req, res) {
  const id = req.params.id;
  let toUpdate = req.body;
  User.findById(id, (err, userToUpdate) => {
    if (err) {
      res.status(500).send({
        message: 'Error encontrando el usuario.'
      })
    } else {
      bcrypt.hash(toUpdate.password, null, null, (err, hash) => {
        if (err) {
          res.status(500).send({
            message: '[ERROR] - Generando el hash en el password'
          })
        } else {
          userToUpdate.password = hash;
          userToUpdate.save((err, userStored) => {
            if (err) {
              res.status(500).send({
                message: '[ERROR] - Guardando el usuario',
                error: err
              })
            } else {
              res.status(200).send({
                message: 'Contraseña actualizada con exito',
              })
            }
          })
        }
      })
    }
  })
}

function recoveryPassword(req, res) {
  const email = req.params.email;
  User.findOne({ email: email }, (err, userFound) => {
    if (err) {
      res.status(500).send({
        message: 'Error encontrando el usuario.'
      })
    } else {
      if (!userFound) {
        res.status(500).send({
          message: 'No hay usuarios registrados con ese email.'
        })
      } else {
        const messageEmail = {
          to: `${userFound.name} ${userFound.lastname} <${email}>`,
          subject: 'application-title Recuperación de contraseña',
          template: 'recovery-password',
          context: {
            title: 'Recuperación de contraseña',
            link: `${process.env.IPPROD}/recovery-password?user=${userFound._id}`,
            copyright: `© ${moment().format('YYYY')}, <a style="text-decoration: none; font-weight: 700; color: #8D949E;" href="http://www.google.com/">ENSO</a>. All rights reserved.`
          },
          attachments: [
            {
              filename: 'logo-fileo.png',
              path: path.join(__dirname, '../assets/logo-fileo.png'),
              cid: 'logo',
            }
          ]
        }

        Email.transporter.sendMail(messageEmail, (error, info) => {
          if (error) {
            console.log(error);
            res.status(500).send({
              message: 'Error enviando el email al administrador'
            })

            return;
          }
  
          Email.transporter.close();
          res.status(200).send({
            message: 'Se ha enviado un correo con las instrucciones para restablecer su contraseña',
          })
        })
      }
    }
  })
}

function changeState(req, res) {
  const id = req.params.id;
  const state = req.body.state;
  User.findById(id, (err, userToUpdate) => {
    if (err) {
      res.status(500).send({
        message: 'Error encontrando el usuario.'
      })
    } else {
      userToUpdate.state = state;
      userToUpdate.save((err, updated) => {
        if (err) {
          res.status(500).send({
            message: 'Error al actualizar el usuario'
          })
        } else {
          if (!updated) {
            res.status(404).send({
              message: 'No se ha actualizo el usuario'
            })
          } else {
            let userToSend = updated.toObject();
            delete userToSend.password;

            res.status(200).send({
              message: state == 'ACTIVE' ? 'El usuario ha sido activado.' : 'El usuario ha sido desactivado.',
              user: userToSend
            })
          }
        }
      })
    }
  })
}

function deleteUser(req, res) {
  const id = req.params.id;
  User.findByIdAndRemove(id, (err, userRemoved) => {
    if (err) {
      res.status(500).send({
        message: 'Error al eliminar un usuario'
      })
    } else {
      if (!userRemoved) {
        res.status(404).send({
          meesage: 'Error encontrando el usuario'
        })
      } else {
        let userToSend = updated.toObject();
        delete userToSend.password;

        res.status(200).send({
          userRemoved: userToSend
        })
      }
    }
  })
}

function uploadImage(req, res) {
  const id = req.params.id;
  const fileName = `upload_at_${moment().format('DD-MM-YYYY-h:mm')}`;
  const authorizedExtensions = ['JPG', 'jpg', 'jpeg', 'png', 'gif'];

  if (!req.files) {
    res.status(500).send({
      message: 'No existen ficheros para subir'
    })
  } else {
    let filePath = req.files.file.path;
    filePath = filePath.split('\\');
    filePath = filePath[filePath.length - 1];

    let fileName = filePath.split('/').pop();

    let fileExtension = filePath.split('\.');
    fileExtension = fileExtension[1];

    if (!authorizedExtensions.includes(fileExtension)) {
      fs.unlink(req.files.file.path, (err) => {
        let message = 'Solo se permiten archivos con extension .jpg, .png, .jpeg y .gif';
        message = err ? `${message}, el archivo no se ha borrado` : message;

        res.status(500).send({
          message: message
        })
      })
    } else if (id != req.user.sub) {
      res.status(500).send({
        message: 'No tiene permisos para realizar esta acción'
      })
    } else {
      const addImageToUser = () => {
        User.findByIdAndUpdate(id, { image: filePath }, { new: true }, (err, userUpdated) => {
          if (err || !userUpdated) {
            res.status(500).send({
              message: 'Ha habido un error en la subida del archivo'
            })
          } else {
            res.status(200).send({
              message: 'El archivo se ha subido existosamente',
              image: filePath
            })
          }
        })
      }

      User.findById(id, (err, user) => {
        if (err) {
          res.status(500).send({
            message: 'Se ha generado un error en el servicio.'
          })
        } else {
          if (!user) {
            res.status(404).send({
              message: 'No se ha encontrado el usuario.'
            })
          } else {
            if (user.image != '') {
              fs.unlink(user.image, (err) => {
                if (err) {
                  res.status(500).send({
                    message: 'Error eliminando la imagen anterior'
                  })
                } else {
                  addImageToUser();
                }
              });
            } else {
              addImageToUser();
            }
          }
        }
      })
    }
  }
}

function getImage(req, res) {
  const imageFile = req.params.imageFile;
  const pathFile = `./uploads/users/${imageFile}`;
  fs.exists(pathFile, function (exists) {
    if (!exists) {
      res.status(404).send({
        message: 'No se ha subido una imagen de Avatar.'
      })
    } else {
      res.sendFile(path.resolve(pathFile));
    }
  })
}

function login(req, res) {
  const params = req.body;
  const email = params.email;
  const password = params.password;

  function validatorPassword (password, userToValidate) {
    bcrypt.compare(password, userToValidate.password, (err, check) => {
      if (err) {
        res.status(500).send({
          message: 'La contraseña es incorrecta.',
          error: err
        })
      } else {
        if (!check) {
          res.status(500).send({
            message: 'La contraseña es incorrecta.'
          })
        } else {
          userToValidate.last_login = moment().unix();
          userToValidate.save((err, userUpdated) => {
            if (err) {
              res.status(500).send({
                message: 'Error en la actualizando el usuario'
              })
            } else {
              if (!userUpdated) {
                res.status(500).send({
                  message: 'Error en la actualizando el usuario'
                })
              } else {
                let userToSend = userUpdated.toObject();
                delete userToSend.password;
                
                res.status(200).send({
                  message: 'Login success',
                  token: jwt.createToken(userToSend),
                  user: userToSend,
                })
              }
            }
          })
        }
      }
    })
  }

  function validatorEmail () {
    User.findOne({ email: params.email.toLowerCase() }, '+password', (err, userFound) => {
      if (err) {
        res.status(500).send({
          message: 'Hubo un error en la comprobación del usuario.'
        })
      } else {
        if (!userFound) {
          validatorUsername();
        } else {
          validatorPassword(password, userFound);
        }
      }
    })
  }

  function validatorUsername () {
    User.findOne({ username: params.email }, '+password', (err, userFound) => {
      if (err) {
        res.status(500).send({
          message: 'Hubo un error en la comprobación del usuario.'
        })
      } else {
        if (!userFound) {
          res.status(500).send({
            message: 'El email/username no coincide con ningun usuario registrado.'
          })
        } else {
          validatorPassword(password, userFound);
        }
      }
    })
  }

  if (!email || email == '' && !password || password == '') {
    res.status(500).send({
      message: 'Los campos email y contraseña son requeridos.'
    })
  } else {
    validatorEmail();
  }
}

function getAll(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(500).send({
        message: '[ERROR] - No se encontraron usuarios registrados / Linea 357'
      })
    } else {
      res.status(200).send({
        users: users
      })
    }
  })
}

function getByUsername(req, res) {
  const username = req.params.username;
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      res.status(500).send({
        message: 'Error encontrando al usuario'
      })
    } else {
      if (!user) {
        res.status(404).send({
          message: 'No se ha encontrado el usuario'
        })
      } else {
        let userToSend = user.toObject();
        delete userToSend._id;
        delete userToSend.password;

        res.status(200).send({
          user: userToSend
        })
      }
    }
  })
}

function getByRole(req, res) {
  const role = req.params.role;
  User.find({ role: role }, (err, users) => {
    if (err) {
      res.status(500).send({
        message: 'Error encontrando el usuario'
      })
    } else {
      res.status(200).send({
        users: users
      })
    }
  })
}

module.exports = {
  createUser,
  activeUser,
  changeState,
  updateUser,
  changePassword,
  recoveryPassword,
  deleteUser,
  uploadImage,
  getImage,
  login,
  getAll,
  getByUsername,
  getByRole,
}