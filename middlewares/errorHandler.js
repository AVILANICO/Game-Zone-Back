const errorHandler = (err, req, res, next) => {
  console.log(err.stack)
  console.log(err);
  return res
  .status(err.status || 500)
  .json({
    statusCode: err.status,
    message: err.message
  })
}

export default errorHandler;
