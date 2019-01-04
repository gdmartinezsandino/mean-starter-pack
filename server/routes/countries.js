'use strict'

const express = require('express');
const CountriesController = require('../controllers/countries');
const router = express.Router();
const auth = require('../middlewares/authenticate');
const userAvailable = require('../middlewares/check-states');

router.get('/countries', [auth.ensureAuth, userAvailable.availability], CountriesController.getCountries);
router.get('/cities-by/:country', [auth.ensureAuth, userAvailable.availability], CountriesController.getCitiesByCountry);

module.exports = router;
