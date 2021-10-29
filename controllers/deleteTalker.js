const fs = require('fs/promises');

module.exports = async (req, res, _next) => {
  const { id } = req.params;

  const read = await fs.readFile('talker.json', 'utf8');
  const data = JSON.parse(read);

  const filted = data.filter((each) => each.id !== parseInt(id, 10));

  await fs.writeFile('talker.json', JSON.stringify(filted));

  res.status(200).send({ message: 'Pessoa palestrante deletada com sucesso' });
};
