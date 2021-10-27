const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

const REQUIRED_EMAIL = {
  status: 400,
  message: 'O campo "email" é obrigatório',
};

const WRONG_FORMAT_EMAIL = {
  status: 400,
  message: 'O "email" deve ter o formato "email@email.com"',
};

const REQUIRED_PASSWORD = {
  status: 400,
  message: 'O campo "password" é obrigatório',
};

const WRONG_FORMAT_PASSWORD = {
  status: 400,
  message: 'O "password" deve ter pelo menos 6 caracteres',
};

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email) return next(REQUIRED_EMAIL);

  if (email.match(regex) === null) return next(WRONG_FORMAT_EMAIL);

  if (!password) return next(REQUIRED_PASSWORD);

  if (password.length < 6) return next(WRONG_FORMAT_PASSWORD);

  next();
};
