// this is when API route is not found
// example: http://localhost:5000/api/asgesdwq
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error) // need to pass in error to throw in to the next middleware
}

// this is when the :id is not an ObjectId
// example: http://localhost:5000/api/products/1
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
