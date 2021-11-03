const errorMw = (err, _req, res, _next) => {
  console.log(err)
  return res.status(err.errorCode || 500).json({ message: err.message })
};

const genError = (errorCode, message) => ({
  errorCode,
  message,
});

module.exports = {
  errorMw,
  genError,
}