'use strict';

process.env.IPPROD = 'http://18.191.137.41';

const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/project-empty', { useMongoClient: true })
  .then(() => {
    console.log('se conecto a MongoDb exitosamente : Project Empty');

    app.listen(port, host, () => {
      console.log(`Server runing correctly in http://${host}:${port}`);
    })
  })
  .catch(err => console.log(err));
