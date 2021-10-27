const express = require('express');
const bodyParser = require('body-parser');
const allTalkers = require('./controllers/allTalkers');
const talkerById = require('./controllers/talkerById');
const login = require('./controllers/login');
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', allTalkers);

app.get('/talker/:id', talkerById);

app.post('/login', auth, login);

app.use(error);

app.listen(PORT, () => {
  console.log('Online');
});
