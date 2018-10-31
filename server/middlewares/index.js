function notFound(req, res, next){
  const error = new Error('not found -' + req.originalUrl);
  res.status(404);
  next(error);
}

function errorHandler(error, req, res, next){
   res.json({
    message: error.message,
    error: process.env.NODE_ENV === 'production' ? {} : error.stack,
  })
}

module.exports = {
  notFound,
  errorHandler
}
