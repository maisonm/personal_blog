//Dependencies
const app = require('./config/express/express_config')();
const http = require('http');
const port = app.get('port');
const path = require('path');

/****** DATABASE ******/
//Determine Database enviroment
let DB_URI;
if (process.env.DATABASE) {
  process.env.DATABASE === 'development'
    ? (DB_URI = process.env.MLAB_URL_DEV)
    : (DB_URI = process.env.MLAB_URL_PROD);
} else {
  DB_URI = false;
}
//Mongoose Connection
const mongoose = require('mongoose');
const mongoDbUri = !DB_URI ? process.env.MLAB_URL_DEV : DB_URI;

//Using only dev db for now
mongoose.connect(process.env.MLAB_URL_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
const database = mongoose.connection;
/* ******************* */

/****** API ROUTES ******/
const blog_routes = require('./routes/blog/blog_routes');
const tags_routes = require('./routes/tags/tags_routes');
app.use('/v1/tags', tags_routes);
app.use('/v1/blog', blog_routes);

/* ******************* */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
});

/****** ERROR HANDLING MIDDLEWARE ******/
const error_handler = require('./middleware/errors/api_errors');
app.use(error_handler);
/* ******************* */

/****** SERVER INITIALIZATION ******/
http.createServer(app).listen(port, (error) => {
  error
    ? console.warn(error)
    : console.info(`Express server running on port ${port}`);
});
/* ******************* */
