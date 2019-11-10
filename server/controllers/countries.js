'use strict'

const fs = require('fs');
const path = require('path');

let rootPath = __dirname;
rootPath = rootPath.substring(0, rootPath.search('/controllers'));

function getCountries(req, res) {
    fs.readFile(`${rootPath}/services/countries.json`, 'utf8', function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'Error al retornar los paises'
            })
        } else {
            res.status(200).send({
                message: 'Paises cargados con exito',
                countries: JSON.parse(data)
            })
        }
    });
}

function getCitiesByCountry(req, res) {
    const country = req.params.country;
    fs.readFile(`${rootPath}/services/cities/${country}.json`, 'utf8', function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'Error al retornar las ciudad de ' + country
            })
        } else {
            res.status(200).send({
                message: 'Las ciudad de ' + country,
                cities: JSON.parse(data).cities
            })
        }
    });
}

module.exports = {
    getCountries,
    getCitiesByCountry,
}