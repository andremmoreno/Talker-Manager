const tokenVal = '7mqaVRXJSp886CGr';

const NO_TOKEN = {
  status: 401,
  message: 'Token não encontrado',
};

const INVALID_TOKEN = {
  status: 401,
  message: 'Token inválido',
};

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return next(NO_TOKEN);
  if (token !== tokenVal) return next(INVALID_TOKEN);

  next();
};
