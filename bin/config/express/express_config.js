const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const path = require('path');
const { NODE_ENV } = process.env;

//External Dependencies
const methodOverride = require('method-override');
const cors = require('cors');
//Allows global access to variables in our .env file
require('dotenv').config({
  path: path.join(__dirname, '../../utils/environment/.env'),
});

module.exports = () => {
  app.set('port', port);

  //Serve build folder of client
  //Terenary for production (NODE_ENV)*****
  app.use(express.static(path.join(__dirname, '../../../client/build')));

  console.log();

  //Middlewares
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(methodOverride('_method'));
  app.use(cors());
  return app;
};
