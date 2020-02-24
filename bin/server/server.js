const app = require('../config/express/express_server')();
const http = require('http');
const port = app.get('port');

/****** API ROUTES ******/
const owner = require('../routes/owner');
app.use('/v1/owner', owner);
/* ******************* */

/****** ERROR HANDLING MIDDLEWARE ******/
const error_handler = require('../middleware/error_handler');
app.use(error_handler);
/* ******************* */

// app.use((req, res, next) => {
//   console.log('called');
//   next();
// });

/****** SERVER INITIALIZATION ******/
http.createServer(app).listen(port, error => {
  error
    ? console.warn(error)
    : console.info(`Express server running on port ${port}`);
});
/* ******************* */
