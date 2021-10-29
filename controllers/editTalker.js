const fs = require('fs/promises');

const NO_TALKER = {
  status: 400,
  message: 'A pessoa palestrante deve ser maior de idade',
};

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const read = await fs.readFile('talker.json', 'utf8');
  const data = JSON.parse(read);

  const talkerSelected = data.find((talker) => talker.id === parseInt(id, 10));

  if (!talkerSelected) return next(NO_TALKER);

  talkerSelected.name = name;
  talkerSelected.age = age;
  talkerSelected.talk = talk;

  await fs.writeFile('talker.json', JSON.stringify(data));

  res.status(200).send(talkerSelected);
};
