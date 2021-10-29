const regexData = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;

const NO_NAME = {
  status: 400,
  message: 'O campo "name" é obrigatório',
};

const UNDER_NAME = {
  status: 400,
  message: 'O "name" deve ter pelo menos 3 caracteres',
};

const NO_AGE = {
  status: 400,
  message: 'O campo "age" é obrigatório',
};

const UNDER_AGE = {
  status: 400,
  message: 'A pessoa palestrante deve ser maior de idade',
};

const INCORRECT_DATA = {
  status: 400,
  message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
};

const INCORRECT_RATE = {
  status: 400,
  message: 'O campo "rate" deve ser um inteiro de 1 à 5',
};

const INCORRECT_TALK = {
  status: 400,
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
};

const nameValidation = (name, next) => {
  if (!name) return next(NO_NAME);
  if (name.length < 3) return next(UNDER_NAME);
};

const ageValidation = (age, next) => {
  if (!age) return next(NO_AGE);
  if (parseInt(age, 10) < 18) return next(UNDER_AGE);
};

const talkValidation = (talk, next) => {
  if (talk.watchedAt.match(regexData) === null) return next(INCORRECT_DATA);
  const { rate } = talk;
  const rateConv = parseFloat(rate);
  if ((Number.isInteger(rateConv) === false) || rateConv > 5 || rateConv < 1) {
    return next(INCORRECT_RATE);
  }
};

const validation = (name, age, talk, next) => {
  nameValidation(name, next);
  ageValidation(age, next);
  if (!talk) return next(INCORRECT_TALK);
  if (!talk.watchedAt || talk.rate === undefined) return next(INCORRECT_TALK);
  talkValidation(talk, next);
};

module.exports = async (req, res, next) => {
  const { name, age, talk } = req.body;

  validation(name, age, talk, next);
  next();
};
