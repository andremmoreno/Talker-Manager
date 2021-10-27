const fs = require('fs/promises');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const data = await fs.readFile('talker.json');
  const allTalkers = JSON.parse(data);
  const talker = allTalkers.filter((each) => each.id === parseInt(id, 10));

  if (talker.length === 0) {
    return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).send(talker[0]); 
};