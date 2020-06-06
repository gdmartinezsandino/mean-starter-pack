'use strict'

const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();
const auth = require('../middlewares/authenticate');
const states = require('../middlewares/check-states');
const checkPermissions = require('../middlewares/check-permissions');

const multipart = require('connect-multiparty');
const mpUpload = multipart({ uploadDir: './uploads/users' });

router.post('/user/register', UserController.createUser);
router.post('/user/upload-image/:id', [auth.ensureAuth, mpUpload], UserController.uploadImage);
router.patch('/user/update/:id', auth.ensureAuth, UserController.updateUser);
router.patch('/user/update-password/:id', UserController.changePassword);

router.delete('/user/:id', auth.ensureAuth, UserController.deleteUser);

router.get('/user/recovery-password/:email', UserController.recoveryPassword);
router.get('/user/get-image/:imageFile', UserController.getImage);
router.get('/user/all', [auth.ensureAuth, states.availability, checkPermissions.isAdmin], UserController.getAll);
router.get('/user/by-role/:role', auth.ensureAuth, UserController.getByRole);

router.post('/user/login', UserController.login);

module.exports = router;
