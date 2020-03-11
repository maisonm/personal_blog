const error_handler = (err, req, res, next) => {
  //Extract status and message properties from passed in error
  const { status, message } = err;
  const error = {
    status,
    message
  };
  console.warn(err);
  res.status(status).json(error);
};

module.exports = error_handler;
