const app = require('../config/express/express_server')();
const http = require('http');
const port = app.get('port');

/****** DATABASE CONNECTION ******/
//Mongoose Connection on server start
const databaseConnection = (async () => {
  const mongoose = require('mongoose');
  const mongoURI = process.env.MONGODB_URI || process.env.MLAB_URI;
  try {
    const db_connection = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db_connection.Promise = global.Promise;
    console.info('Connected to Database');
  } catch (error) {
    console.warn('Connection to MLAB failed');
  }
})();

/* ******************* */

/****** API ROUTES ******/
const owner = require('../routes/owner');
app.use('/v1/owner', owner);
/* ******************* */

/****** ERROR HANDLING MIDDLEWARE ******/
const error_handler = require('../middleware/error_handler');
app.use(error_handler);
/* ******************* */

/****** SERVER INITIALIZATION ******/
http.createServer(app).listen(port, error => {
  error
    ? console.warn(error)
    : console.info(`Express server running on port ${port}`);
});
/* ******************* */
