//In Express, functions with the next argument are considered error handling class functions and are passed errors from from the next() function.
const error_handler = (err, req, res, next) => {
  //Extract status and message properties from passed in error
  const { status, message } = err;
  const error = {
    status,
    message
  };
  res.status(status).json(error);
};

module.exports = error_handler;
