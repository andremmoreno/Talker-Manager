module.exports = async (err, req, res, _next) => {
  if (err.status) {
    return res.status(err.status).send({ message: err.message });
  }
};
