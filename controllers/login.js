const token = {
  token: '7mqaVRXJSp886CGr',
};

module.exports = (req, res, _next) => {
  res.status(200).send(token);
};
